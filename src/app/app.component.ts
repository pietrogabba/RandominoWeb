import { Component, NgZone, ViewChild } from '@angular/core';
import { TonalityCalculatorService } from './services/tonality-calculator.service';
import { Alteration } from './global/alteration';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

interface TonicNote{
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TonalityCalculatorService]
})
export class AppComponent {
  title = 'RandominoWeb';
  calculatedScale: Array<string>;
  tonicNotes: TonicNote[] = [
    {value: 'A', viewValue: 'A'},
    {value: 'B', viewValue: 'B'},
    {value: 'C', viewValue: 'C'},
    {value: 'D', viewValue: 'D'},
    {value: 'E', viewValue: 'E'},
    {value: 'F', viewValue: 'F'},
    {value: 'G', viewValue: 'G'}
  ];

  constructor(private tonalityCalcService: TonalityCalculatorService,
    private _ngZone: NgZone)
  {
    
  }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  calculateScale()
  {
    this.calculatedScale = this.tonalityCalcService.getTonalityNoteCollection("E", Alteration.None);
  }

}
