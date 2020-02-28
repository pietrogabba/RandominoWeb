import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TonalityRequest } from './entities/tonality-request';
import { TonalityCalculatorService } from './services/tonality-calculator.service';

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
  @Input() model: TonalityRequest;
  
  title = 'RandominoWeb';
  scaleForm: FormGroup;
  tonicNotes: TonicNote[] = [
    {value: 'A', viewValue: 'A'},
    {value: 'B', viewValue: 'B'},
    {value: 'C', viewValue: 'C'},
    {value: 'D', viewValue: 'D'},
    {value: 'E', viewValue: 'E'},
    {value: 'F', viewValue: 'F'},
    {value: 'G', viewValue: 'G'}
  ];

  constructor(private tonalityCalcService: TonalityCalculatorService, fb: FormBuilder)
  {
    this.model = new TonalityRequest();
    this.scaleForm = fb.group({
      cmbTonic: ['', Validators.required],
      cmbAlteration: ['None', Validators.required],
      rdFlavour: ['major'],
      txtResult: []
    });

    this.scaleForm.valueChanges.subscribe(value => {
      this.model.tonic = value.cmbTonic;
      this.model.alteration = value.cmbAlteration;
      this.model.flavour = value.rdFlavour;
      this.calculateScale();
    });
  }

  calculateScale()
  {
    let calculatedScaleArray = this.tonalityCalcService.getTonalityNoteCollection(this.model.tonic, this.model.alteration, this.model.flavour);
    this.scaleForm.patchValue({
      txtResult: calculatedScaleArray.join(',')
    }, { emitEvent: false });
  }

}
