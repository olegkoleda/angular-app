import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormDateComponent } from '../form-date/form-date.component';

@Component({
  selector: 'app-form-duration',
  templateUrl: './form-duration.component.html',
  styleUrls: ['./form-duration.component.scss'],
  providers: [
    {
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(() => FormDurationComponent),
   multi: true
 },
  {
   provide: NG_VALIDATORS,
   useExisting: forwardRef(() => FormDurationComponent),
   multi: true
 }
]
})
export class FormDurationComponent implements OnInit {

  public durationForm: FormGroup = new FormGroup(
    {
  length: new FormControl('', [Validators.required]),
  });
  constructor() { }

  ngOnInit() {
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    if (val) {
      this.durationForm.setValue(val, { emitEvent: false });
    }
  }
  registerOnChange(fn: any): void {
    this.durationForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.durationForm.disable() : this.durationForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    console.log('Basic Info validation', c);
    return this.durationForm.valid ? null : { invalidForm: {valid: false, message: 'dateForm fields are invalid'}};
  }
}
