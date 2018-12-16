import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.coursesData = [
      {id: 0, title: 'test', creationDate: new Date(), duration: 100, description: 'test'},
      {id: 0, title: 'test', creationDate: new Date(), duration: 100, description: 'test'}];
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
