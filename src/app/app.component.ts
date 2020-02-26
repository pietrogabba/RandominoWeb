import { Component } from '@angular/core';
import { TonalityCalculatorService } from './services/tonality-calculator.service';
import { Alteration } from './global/alteration';

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
  calcolataAlVolo: Array<string>;
  tonicNotes: TonicNote[] = [
    {value: 'A', viewValue: 'A'},
    {value: 'B', viewValue: 'B'},
    {value: 'C', viewValue: 'C'},
    {value: 'D', viewValue: 'D'},
    {value: 'E', viewValue: 'E'},
    {value: 'F', viewValue: 'F'},
    {value: 'G', viewValue: 'G'}
  ];

  constructor(private tonalityCalcService: TonalityCalculatorService)
  {
    
  }

  calculateScale()
  {
    this.calcolataAlVolo = this.tonalityCalcService.getTonalityNoteCollection("E", Alteration.None);
  }

}
