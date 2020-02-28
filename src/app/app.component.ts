import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TonalityRequest } from './entities/tonality-request';
import { TonalityCalculatorService } from './services/tonality-calculator.service';
import { CircleOfFifth, circleOfFourth } from './global/definitions';

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
  tonicNotes: Array<string>;

  constructor(private tonalityCalcService: TonalityCalculatorService, fb: FormBuilder)
  {
    this.model = new TonalityRequest();
    this.tonicNotes = CircleOfFifth.map(x => x.note);

    this.scaleForm = fb.group({
      cmbCircle: ['asc', Validators.required],
      cmbTonic: ['', Validators.required],
      rdFlavour: ['major'],
      txtResult: []
    });

    this.scaleForm.valueChanges.subscribe(value => {
      this.model.circle = value.cmbCircle;
      this.model.tonic = value.cmbTonic;
      this.model.flavour = value.rdFlavour;
    });
  }

  cmbCircle_OnChange(){
    this.fillCmbTonic();
  }

  rdFlavour_OnChange(){
    this.fillCmbTonic();
  }

  fillCmbTonic(){
    if(this.model.circle === 'asc'){
      this.tonicNotes = (this.model.flavour === 'minor')?CircleOfFifth.map(x => x.relatedMinor):CircleOfFifth.map(x => x.note);
    }else if (this.model.circle === 'desc'){
      this.tonicNotes = (this.model.flavour === 'minor')?circleOfFourth.map(x => x.relatedMinor):circleOfFourth.map(x => x.note);
    }

    this.scaleForm.patchValue({cmbTonic: null}); //resetto perche si ripopola
  }

  calculateScale()
  {
    //this.scaleForm.patchValue({txtResult: ''}, {emitEvent: false});
    let calculatedScaleArray = this.tonalityCalcService.getTonalityNoteCollection(this.model.tonic, this.model.circle, this.model.flavour);
    this.scaleForm.patchValue({
      txtResult: calculatedScaleArray.join(',')
    }, { emitEvent: false });
  }

}
