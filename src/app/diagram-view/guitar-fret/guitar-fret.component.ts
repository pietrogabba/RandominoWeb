import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guitar-fret',
  templateUrl: './guitar-fret.component.html',
  styleUrls: ['./guitar-fret.component.scss']
})
export class GuitarFretComponent implements OnInit {
  @Input() fretNote: string;
  @Input() active: boolean = false;

  constructor() {
    if(!this.fretNote)
      this.fretNote = '-';
   }

  clear(){
    this.fretNote = '-';
  }

  ngOnInit(): void {
  }

}
