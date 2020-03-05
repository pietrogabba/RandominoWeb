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

  constructor() {
    if(!this.activeIcon)
    this.activeIcon = '';
   }

  ngOnInit(): void {
  }

  setActiveLeftNote(isTonic: boolean) {
    this.activeLeft = true;
  }

  setActiveRightNote(isTonic: boolean) {
    this.activeRight = true;
  }

  setActiveCenterNote(isTonic: boolean) {
    this.activeCenter = true;
    this.activeIcon = 'play_circle_filled';
  }

  setInactiveLeftNote() {
    this.activeLeft = false;
  }

  setInactiveRightNote() {
    this.activeRight = false;
  }

  setInactiveCenterNote() {
    this.activeCenter = false;    
    this.activeIcon = '';
  }

}
