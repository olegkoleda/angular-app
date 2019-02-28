import { Component, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-courses-controls',
  templateUrl: './courses-controls.component.html',
  styleUrls: ['./courses-controls.component.scss']
})
export class CoursesControlsComponent implements OnInit {

  public value: String = '';
  private searchTerm$ = new Subject<string>();

  @Output() filterTerm: EventEmitter<String> = new EventEmitter<String>();

  constructor(private router: Router) { }

  public ngOnInit() {
    this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((res) => {
        this.filterTerm.emit(res);
    });
  }
  public logSearchValue() {
    console.log(this.value);
  }

  public setFilterTerm(value) {
      this.searchTerm$.next(value);
  }

  public goToCreatePage() {
    this.router.navigate(['courses', 'new']);
  }
}
