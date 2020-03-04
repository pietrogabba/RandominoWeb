import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, Input, OnChanges } from '@angular/core';
import { GuitarFretComponent } from '../guitar-fret/guitar-fret.component';

@Component({
  selector: 'app-guitar-fret-board',
  templateUrl: './guitar-fret-board.component.html',
  styleUrls: ['./guitar-fret-board.component.scss']
})
export class GuitarFretBoardComponent implements OnInit, OnChanges {

  @Input() calculatedScaleArray: Array<string>;
  @ViewChildren('apfret') frets: QueryList<GuitarFretComponent>;

  constructor() { }

  ngOnInit(): void {
   
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if(this.calculatedScaleArray){

      //this.calculatedScaleArray.forEach(element => {
        this.frets.forEach(fret => {
          if(this.calculatedScaleArray.includes(fret.fretNote))
            fret.setActive();
          else
            fret.setInactive();
        });
      };

    //} 
  }

}
