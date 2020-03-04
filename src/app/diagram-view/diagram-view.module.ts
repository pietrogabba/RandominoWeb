import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GuitarFretBoardComponent } from './guitar-fret-board/guitar-fret-board.component';
import { GuitarFretComponent } from './guitar-fret/guitar-fret.component';
import { FormatFretNote } from '../global/pipes/format-fret-note';

@NgModule({
  declarations: [GuitarFretBoardComponent, GuitarFretComponent, FormatFretNote],
  imports: [
    CommonModule
  ],
  exports: [
    GuitarFretBoardComponent
  ]
})
export class DiagramViewModule { }
