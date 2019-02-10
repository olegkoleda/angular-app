import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-controls',
  templateUrl: './courses-controls.component.html',
  styleUrls: ['./courses-controls.component.scss']
})
export class CoursesControlsComponent {

  public value: String = '';

  @Output() filterTerm: EventEmitter<String> = new EventEmitter<String>();

  constructor(private router: Router) { }

  public logSearchValue() {
    console.log(this.value);
  }

  public setFilterTerm() {
    this.filterTerm.emit(this.value);
  }

  public goToCreatePage() {
    this.router.navigate(['courses', 'new']);
  }

}
