import { Injectable } from '@angular/core';
import { Alteration } from '../global/alteration';
import { CircleOfFifth, CircleOfFifthAlterations } from '../global/definitions';

@Injectable({
  providedIn: 'root'
})
export class TonalityCalculatorService {

  constructor() { }

  getTonalityNoteCollection(tonicNote: string, alterationType: string, flavour: string) : Array<string>
  {
    let alteredNotes = new Array<string>();
    let numberOfAlterations = 0;
    let alterationSymbol = '';

    if(alterationType === Alteration.None)
    {
      alterationSymbol = Alteration.sharp;
      numberOfAlterations = CircleOfFifth.find(a => a.note === tonicNote).alterations;
    }
    
    let scaleSequence = this.getScaledNoteSequence(tonicNote);
    for(let i = 0; i < scaleSequence.length; i++){
      for(let a = 0; a < numberOfAlterations; a++){
        if(CircleOfFifthAlterations[a].alteration === scaleSequence[i]){
          scaleSequence[i] = scaleSequence[i] + alterationSymbol;
        }
      }
    }
    alteredNotes = scaleSequence;
    return alteredNotes;
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
