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
      this.keys.forEach(key => {

        if(this.calculatedScaleArray.includes(key.leftNote)){
          let isTonic = (key.leftNote === this.tonicNote);
          key.setActiveLeftNote(isTonic);
        }else
          key.setInactiveLeftNote();

        if(this.calculatedScaleArray.includes(key.note)){
          let isTonic = (key.note === this.tonicNote);
          key.setActiveCenterNote(isTonic);
        }else
          key.setInactiveCenterNote();

        if(this.calculatedScaleArray.includes(key.rightNote)){
          let isTonic = (key.rightNote === this.tonicNote);
          key.setActiveRightNote(isTonic);
        }else
          key.setInactiveRightNote();
      });
    };
  }

}
