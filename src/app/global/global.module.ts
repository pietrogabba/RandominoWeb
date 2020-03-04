import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatFretNote } from './pipes/format-fret-note';

@NgModule({
    declarations: [
        FormatFretNote
    ],
    imports: [
      CommonModule
    ],
    exports: [
        FormatFretNote
    ]
  })
  export class GlobalModule { }