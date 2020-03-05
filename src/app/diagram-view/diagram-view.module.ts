import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GuitarFretBoardComponent } from './guitar-fret-board/guitar-fret-board.component';
import { GuitarFretComponent } from './guitar-fret/guitar-fret.component';
import { FormatFretNote } from '../global/pipes/format-fret-note';
import { MatIconModule } from '@angular/material/icon';
import { KeyComponent } from './key/key.component';
import { KeyBoardComponent } from './key-board/key-board.component';

@NgModule({
  declarations: [GuitarFretBoardComponent, GuitarFretComponent, FormatFretNote, KeyComponent, KeyBoardComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    GuitarFretBoardComponent,
    KeyBoardComponent
  ]
})
export class DiagramViewModule { }
