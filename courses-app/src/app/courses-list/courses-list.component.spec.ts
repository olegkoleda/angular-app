import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoursesSortPipe } from '../pipes/courses-sort.pipe';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListComponent, CoursesSortPipe],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.coursesData = [
      {id: 0, title: 'test', creationDate: new Date(), duration: 100, description: 'test', rating: 5},
      {id: 0, title: 'test', creationDate: new Date(), duration: 100, description: 'test', rating: 5}];
    fixture.detectChanges();
  });

  it('should exist', () => {
    expect(component).toBeTruthy();
  });

  it('should create 2 items', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ul').childElementCount).toEqual(2);
  });
});
