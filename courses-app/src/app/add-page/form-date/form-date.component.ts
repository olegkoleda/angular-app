import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss'],
  providers: [
    {
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(() => FormDateComponent),
   multi: true
 },
  {
   provide: NG_VALIDATORS,
   useExisting: forwardRef(() => FormDateComponent),
   multi: true
 }
]
})
export class FormDateComponent implements OnInit {

  public dateForm: FormGroup = new FormGroup(
    {
  date: new FormControl('', [Validators.required]),
  });
  constructor() { }

  ngOnInit() {
  }
  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    if (val) {
      this.dateForm.setValue(val, { emitEvent: false });
    }
  }
  registerOnChange(fn: any): void {
    this.dateForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.dateForm.disable() : this.dateForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    console.log('Basic Info validation', c);
    return this.dateForm.valid ? null : { invalidForm: {valid: false, message: 'dateForm fields are invalid'}};
  }
}
