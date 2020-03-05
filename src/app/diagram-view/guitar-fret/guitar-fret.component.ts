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
  
  polptype: string = 'pressed';
  
  constructor() {
    if(!this.fretPressedIcon)
      this.fretPressedIcon = '';
   }

  setActive(isTonic: boolean){
    this.active = true;
    this.fretPressedIcon = 'play_circle_filled';
    if(isTonic){
      this.polptype = 'tonic';
    }else{
      this.polptype = 'pressed';
    }
  }

  setInactive(){
    this.active = false;
    this.fretPressedIcon = '';
    this.polptype = 'pressed';
  }

  ngOnInit(): void {
  }

}
