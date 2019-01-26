import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-controls',
  templateUrl: './courses-controls.component.html',
  styleUrls: ['./courses-controls.component.scss']
})
export class CoursesControlsComponent {

  public value: String = '';

  @Output() filterTerm: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  public logSearchValue() {
    console.log(this.value);
  }

  public setFilterTerm() {
    this.filterTerm.emit(this.value);
  }

}
