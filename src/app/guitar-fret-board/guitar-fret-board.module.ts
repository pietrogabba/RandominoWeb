import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GuitarFretComponent } from './guitar-fret/guitar-fret.component';
import { GuitarFretBoardComponent } from './guitar-fret-board.component';

@NgModule({
  declarations: [GuitarFretBoardComponent, GuitarFretComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GuitarFretBoardComponent
  ]
})
export class GuitarFretBoardModule { }
