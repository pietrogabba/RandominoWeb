import { Component, OnInit, Input, ViewChildren, QueryList, OnChanges } from '@angular/core';
import { KeyComponent } from '../key/key.component';

@Component({
  selector: 'app-key-board',
  templateUrl: './key-board.component.html',
  styleUrls: ['./key-board.component.scss']
})
export class KeyBoardComponent implements OnInit, OnChanges {
  @Input() calculatedScaleArray: Array<string>;
  @Input() tonicNote: string;
  @ViewChildren('apkey') keys: QueryList<KeyComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if(this.calculatedScaleArray){
      if(this.keys){
        this.keys.forEach(key => {
          let leftNote1: string = (key.leftNote)?key.leftNote.split(';')[0]:'';
          let leftNote2: string = (key.leftNote)?key.leftNote.split(';')[1]:'';
          let rightNote1: string = (key.rightNote)?key.rightNote.split(';')[0]:'';
          let rightNote2: string = (key.rightNote)?key.rightNote.split(';')[1]:'';
          
          if(this.calculatedScaleArray.includes(leftNote1) || this.calculatedScaleArray.includes(leftNote2)){
            let isTonic = (leftNote1 === this.tonicNote || leftNote2 === this.tonicNote);
            key.setActiveLeftNote(isTonic);
          }else
            key.setInactiveLeftNote();

          if(this.calculatedScaleArray.includes(key.note)){
            let isTonic = (key.note === this.tonicNote);
            key.setActiveCenterNote(isTonic);
          }else
            key.setInactiveCenterNote();

          if(this.calculatedScaleArray.includes(rightNote1) || this.calculatedScaleArray.includes(rightNote2)){
            let isTonic = (rightNote1 === this.tonicNote || rightNote2 === this.tonicNote);
            key.setActiveRightNote(isTonic);
          }else
            key.setInactiveRightNote();
        });
      }
    };
  }

}
