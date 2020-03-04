import { Injectable } from '@angular/core';
import { Alteration } from '../global/enums/alteration';
import { CircleOfFifth, CircleOfFifthAlterations, circleOfFourthAlterations, circleOfFourth, AscendingNoteList, DescendingNoteList } from '../global/models/definitions';
import { ScaleType } from '../global/enums/scaletype';

@Injectable({
  providedIn: 'root'
})
export class TonalityCalculatorService {

  constructor() { }

  getTonalityNoteCollection(tonicNote: string, circleToUse: string, flavour: string, scaleType: string) : Array<string>
  {
    if(!tonicNote)
      return [];
    let numberOfAlterations = 0;
    let alterationSymbol = Alteration.sharp;
    let referenceCircleAlterations = CircleOfFifthAlterations;
    let referenceCircle = CircleOfFifth;

    if(circleToUse === 'desc'){
      alterationSymbol = Alteration.flat;
      referenceCircleAlterations = circleOfFourthAlterations;
      referenceCircle = circleOfFourth;
    }

    numberOfAlterations = this.getNumberOfAlterations(referenceCircle, flavour, tonicNote);

    let scaleSequence = this.getScaledNoteSequence(tonicNote.substring(0, 1));
    for(let i = 0; i < scaleSequence.length; i++){
      for(let a = 0; a < numberOfAlterations; a++){
        if(referenceCircleAlterations[a].alteration === scaleSequence[i]){
          scaleSequence[i] = scaleSequence[i] + alterationSymbol;
        }
      }
    }

    let newSeq = this.applyScaleType(scaleSequence, circleToUse, scaleType);
    return this.NormalizeStrangeNotes(newSeq);
  }

  private NormalizeStrangeNotes(sequence: string[]): string[] {
    let str: string = sequence.join(';');
    str = str.replace('E#','F').replace('B#','C').replace('Fb','E').replace('Cb','B');
    return str.split(';');
  }

  private applyScaleType(noteCollection: string[],circleToUse: string,  scaleType: string){
    switch(scaleType)
    {
      case ScaleType.harmonic:
        noteCollection[6] = this.AddSemitones(noteCollection[6],circleToUse, 1);
        break;
      case ScaleType.melodic:
        noteCollection[5] = this.AddSemitones(noteCollection[5],circleToUse, 1);
        noteCollection[6] = this.AddSemitones(noteCollection[6],circleToUse, 1);
        break;
      case ScaleType.pentatonic:
        noteCollection = this.getPentatonicScale(noteCollection);
        break;
      // case ScaleType.blues:
      //   noteCollection = this.getPentatonicScale(noteCollection);  
      //   noteCollection = this.AddBlueNote(noteCollection);
        break;
    }

    return noteCollection;
  }

  private getPentatonicScale(entireScale: string[]): Array<string>{
    let pScale = new Array<string>(5);
    let ii = 0;
    for(let i = 0; i < entireScale.length; i++){
      if(i != 3 && i != 6){
        pScale[ii] = entireScale[i];
        ii++;
      }
    }

    return pScale;
  }

  private AddSemitones(note: string, circleToUse: string, numberOfSempitones: number): string{

    let referenceNoteList = (circleToUse === 'asc')? AscendingNoteList: DescendingNoteList;
    let indexOfNote = referenceNoteList.findIndex(n => n.note === note);
    let newIndex = (indexOfNote + numberOfSempitones)
    newIndex = (newIndex > 11)? newIndex - 12: newIndex;
    let foundNote = referenceNoteList.find(n => n.index === newIndex);

    return foundNote.note;
  }

  private getNumberOfAlterations(
      referenceCircle: {note: string, relatedMinor: string, 
      alterations: number}[], flavour: string, tonicNote: string): number{
    let circle: any;

    if(flavour === 'minor'){
      circle = referenceCircle.find(a => a.relatedMinor === tonicNote);
    }else{
      circle = referenceCircle.find(a => a.note === tonicNote);
    }
    
    if(circle)
      return circle.alterations;
    return 0;
  }

  private getScaledNoteSequence(startNote: string): Array<string> {
    let scaleStack: Array<string> = ['A','B','C','D','E','F','G'];
    let clonedScaleStack = Object.assign([], scaleStack);
    for(let i = 0; i < scaleStack.length; i++){
      if(scaleStack[i] === startNote){
        break;
      }
      let shifted = clonedScaleStack.shift();
      clonedScaleStack.push(shifted); 
    }
    return clonedScaleStack;
  }
}
