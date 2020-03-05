import { Component, Input, OnChanges, OnInit, QueryList, ViewChildren } from '@angular/core';

import { GuitarFretComponent } from '../guitar-fret/guitar-fret.component';

@Component({
  selector: 'app-guitar-fret-board',
  templateUrl: './guitar-fret-board.component.html',
  styleUrls: ['./guitar-fret-board.component.scss']
})
export class GuitarFretBoardComponent implements OnInit, OnChanges {

  @Input() calculatedScaleArray: Array<string>;
  @Input() tonicNote: string;
  @ViewChildren('apfret') frets: QueryList<GuitarFretComponent>;

  constructor() { }

  ngOnInit(): void {
   
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if(this.calculatedScaleArray){
      if(this.frets){
        this.frets.forEach(fret => {
          let isDoubleValue: boolean = fret.fretNote.includes(';');
          let fn1: string = fret.fretNote.split(';')[0];
          let fn2: string = (isDoubleValue)?fret.fretNote.split(';')[1]:'NoNote';

          if(this.calculatedScaleArray.includes(fn1) || this.calculatedScaleArray.includes(fn2))
          {  
            let isTonic = (fn1 === this.tonicNote || fn2 === this.tonicNote);
            fret.setActive(isTonic);
          }
          else
          {
            fret.setInactive();
          }
        });
      }
    };
  }

}
