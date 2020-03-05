import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {

  @Input() leftNote: string;
  @Input() note: string;
  @Input() rightNote: string;

  @Input() activeLeft: boolean = false;
  @Input() activeCenter: boolean = false;
  @Input() activeRight: boolean = false;

  activeIcon: string;
  lcolor: string = 'black';
  ccolor: string = 'red';
  rcolor: string = 'black';

  constructor() {
    if(!this.activeIcon)
    this.activeIcon = '';
   }

  ngOnInit(): void {
  }

  setActiveLeftNote(isTonic: boolean) {
    this.activeLeft = true;
    this.lcolor = (isTonic) ? 'blue' : 'red';
  }

  setActiveRightNote(isTonic: boolean) {
    this.activeRight = true;
    this.rcolor = (isTonic) ? 'blue' : 'red';
  }

  setActiveCenterNote(isTonic: boolean) {
    this.activeCenter = true;
    this.activeIcon = 'play_circle_filled';
    this.ccolor = (isTonic) ? 'blue' : 'red';
  }

  setInactiveLeftNote() {
    this.activeLeft = false;
    this.lcolor = 'black';
  }

  setInactiveRightNote() {
    this.activeRight = false;
    this.rcolor = 'black';
  }

  setInactiveCenterNote() {
    this.activeCenter = false;    
    this.activeIcon = '';
    this.ccolor = 'red';
  }

}
