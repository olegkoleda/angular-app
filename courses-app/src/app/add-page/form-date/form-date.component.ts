import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss']
})
export class FormDateComponent implements OnInit {

  public dateField: FormGroup = new FormGroup(
    {
  date: new FormControl('', [Validators.required]),
  });
  constructor() { }

  ngOnInit() {
  }

}
