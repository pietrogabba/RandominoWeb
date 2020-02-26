import { Component } from '@angular/core';
import { TonalityCalculatorService } from './services/tonality-calculator.service';
import { Alteration } from './global/alteration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TonalityCalculatorService]
})
export class AppComponent {
  title = 'RandominoWeb';
  calcolataAlVolo: string;
  constructor(private tonalityCalcService: TonalityCalculatorService)
  {
    this.calcolataAlVolo = tonalityCalcService.getTonalityNoteCollection("A", Alteration.None);
  }

}
