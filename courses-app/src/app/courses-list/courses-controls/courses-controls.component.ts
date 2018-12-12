import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-controls',
  templateUrl: './courses-controls.component.html',
  styleUrls: ['./courses-controls.component.scss']
})
export class CoursesControlsComponent implements OnInit {

  public value: String = '';
  constructor() { }

  public logSearchValue() {
    console.log(this.value);
  }
  ngOnInit() {
  }

}
