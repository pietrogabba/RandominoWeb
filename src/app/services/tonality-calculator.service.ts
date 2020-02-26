import { Injectable } from '@angular/core';
import { Alteration } from '../global/alteration';
import { CircleOfFifth, CircleOfFifthAlterations } from '../global/definitions';

@Injectable({
  providedIn: 'root'
})
export class TonalityCalculatorService {

  constructor() { }

  getTonalityNoteCollection(tonicNote: string, alterationType: string) : Array<string>
  {
    let alteredNotes = new Array<string>();
    let numberOfAlterations = 0;
    let alterationSymbol = '';
    let arrAlterations = CircleOfFifthAlterations;

    if(alterationType === Alteration.None)
    {
      alterationSymbol = Alteration.sharp;
      numberOfAlterations = CircleOfFifth.find(a => a.note === tonicNote).alterations;
    }
    
    for(let i = 0; i < numberOfAlterations; i++)
    {
      alteredNotes.push(arrAlterations[i].alteration + alterationSymbol);
    }

    return alteredNotes;
  }

}
