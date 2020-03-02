import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TonalityRequest } from './entities/tonality-request';
import { CircleOfFifth, circleOfFourth, majorScaleTypeList, minorScaleTypeList } from './global/definitions';
import { SelectOptionModel } from './global/select-option-model';
import { TonalityCalculatorService } from './services/tonality-calculator.service';
import { Flavor } from './global/flavour';
import { ScaleType } from './global/scaletype';

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
  scaleTypes: SelectOptionModel[];

  constructor(private tonalityCalcService: TonalityCalculatorService, fb: FormBuilder)
  {
    this.model = new TonalityRequest();
    this.tonicNotes = CircleOfFifth.sort((a, b) => (a.index > b.index) ? 1 : -1).map(x => x.note);
    this.scaleTypes = majorScaleTypeList;

    this.scaleForm = fb.group({
      cmbCircle: ['asc', Validators.required],
      cmbTonic: ['', Validators.required],
      rdFlavour: [Flavor.major],
      cmbScaleType: [ScaleType.natural, Validators.required],
      txtResult: []
    });

    this.scaleForm.valueChanges.subscribe(value => {
      this.model.circle = value.cmbCircle;
      this.model.tonic = value.cmbTonic;
      this.model.flavour = value.rdFlavour;
      this.model.scaleType = value.cmbScaleType;
    });

    // TEST TEST TEST
    // var sss = this.tonalityCalcService.getTonalityNoteCollection('C', 'asc', 'major', 'natural');
    // let s = this.tonalityCalcService.applyScaleType(sss, 'asc', 'pentatonic');
    // console.log(s);

  }

  cmbCircle_OnChange(){
    this.fillCmbTonic();
    this.fillCmbScaleTypes();
  }

  rdFlavour_OnChange(){
    this.fillCmbTonic();
    this.fillCmbScaleTypes();
  }

  fillCmbScaleTypes(){
    if(this.model.flavour === Flavor.minor){
      this.scaleTypes = minorScaleTypeList;
    }else if (this.model.flavour === Flavor.major){
      this.scaleTypes = majorScaleTypeList;
    }

    this.scaleForm.patchValue({cmbScaleType: null});
  }

  fillCmbTonic(){
    let sortObjArr: any;
    if(this.model.circle === 'asc'){
      sortObjArr = CircleOfFifth;
    }else if (this.model.circle === 'desc'){
      sortObjArr = circleOfFourth;
    }
    
    sortObjArr = sortObjArr.sort((a, b) => (a.index > b.index) ? 1 : -1);
    this.tonicNotes = (this.model.flavour === Flavor.minor) ? sortObjArr.map(x => x.relatedMinor) : sortObjArr.map(x => x.note);

    this.scaleForm.patchValue({cmbTonic: null}); //resetto perche si ripopola
  }

  calculateScale()
  {
    //this.scaleForm.patchValue({txtResult: ''}, {emitEvent: false});
    let calculatedScaleArray = this.tonalityCalcService.getTonalityNoteCollection(this.model.tonic, this.model.circle, this.model.flavour, this.model.scaleType);
    this.scaleForm.patchValue({
      txtResult: calculatedScaleArray.join(',')
    }, { emitEvent: false });
  }

}
