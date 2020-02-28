import { Injectable } from '@angular/core';
import { Alteration } from '../global/alteration';
import { CircleOfFifth, CircleOfFifthAlterations, circleOfFourthAlterations, circleOfFourth } from '../global/definitions';

@Injectable({
  providedIn: 'root'
})
export class TonalityCalculatorService {

  constructor() { }

  getTonalityNoteCollection(tonicNote: string, circleToUse: string, flavour: string) : Array<string>
  {
    console.log(flavour);
    let alteredNotes = new Array<string>();
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
    alteredNotes = scaleSequence;
    return alteredNotes;
  }

  private getNumberOfAlterations(
    referenceCircle: {note: string, relatedMinor: string, 
    alterations: number}[], 
    flavour: string, 
    tonicNote: string): number{

    if(flavour === 'minor'){
      return referenceCircle.find(a => a.relatedMinor === tonicNote).alterations;
    }
    return referenceCircle.find(a => a.note === tonicNote).alterations;
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
