import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guitar-fret',
  templateUrl: './guitar-fret.component.html',
  styleUrls: ['./guitar-fret.component.scss']
})
export class GuitarFretComponent implements OnInit {
  @Input() fretNote: string;
  @Input() fretPressedIcon: string;
  @Input() active: boolean = false;

  constructor() {
    if(!this.fretPressedIcon)
      this.fretPressedIcon = '';
   }

  setActive(){
    this.active = true;
    this.fretPressedIcon = 'check_circle';
  }

  setInactive(){
    this.active = false;
    this.fretPressedIcon = '';
  }

  ngOnInit(): void {
  }

}
