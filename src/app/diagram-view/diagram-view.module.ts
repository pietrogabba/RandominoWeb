import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GuitarFretBoardComponent } from './guitar-fret-board/guitar-fret-board.component';
import { GuitarFretComponent } from './guitar-fret/guitar-fret.component';
import { FormatFretNote } from '../global/pipes/format-fret-note';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [GuitarFretBoardComponent, GuitarFretComponent, FormatFretNote],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    GuitarFretBoardComponent
  ]
})
export class DiagramViewModule { }
