import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guitar-fret',
  templateUrl: './guitar-fret.component.html',
  styleUrls: ['./guitar-fret.component.scss']
})
export class GuitarFretComponent implements OnInit {
  @Input() fretNote: string;
  @Input() fretNoteView: string;
  @Input() active: boolean = false;
  color: string = 'red';

  constructor() {

   }

  setActive(isTonic: boolean){
    this.active = true;
    this.color = (isTonic)?'blue':'red';
  }

  setInactive(){
    this.active = false;
  }

  ngOnInit(): void {
  }

}
