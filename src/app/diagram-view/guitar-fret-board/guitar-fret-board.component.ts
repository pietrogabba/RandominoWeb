import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { GuitarFretComponent } from '../guitar-fret/guitar-fret.component';

@Component({
  selector: 'app-guitar-fret-board',
  templateUrl: './guitar-fret-board.component.html',
  styleUrls: ['./guitar-fret-board.component.scss']
})
export class GuitarFretBoardComponent implements OnInit, AfterViewInit {
  //TODO: eh eh! Questo ti permette di iterare sui fret (dio cane)
  @ViewChildren('apfret') frets: QueryList<GuitarFretComponent>;

  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {

    this.frets.forEach(fret => console.log('fret: ' + fret.fretNote))

  }
}
