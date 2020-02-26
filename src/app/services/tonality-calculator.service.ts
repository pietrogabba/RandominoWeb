import { Injectable } from '@angular/core';
import { Alteration } from '../global/alteration';

@Injectable({
  providedIn: 'root'
})
export class TonalityCalculatorService {

  constructor() { }

  getTonalityNoteCollection(tonicNote: string, alteration: string)
  {
    /*
    if(alteration === Alteration.None)
    {
      console.log('scelto un cazzo');
    }
  */
 
    return 'test';
  }

}
