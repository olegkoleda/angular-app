import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';
import { Component } from '@angular/core';
import { Course } from '../course.module';
import { By } from '@angular/platform-browser';

describe('CoursesListItemComponent stand-alone-test', () => {
  let sut: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;

  let course: Course;
  let deleteMethodSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListItemComponent]
    });
  }));

  beforeEach(() => {
    course = new Course(0, 'Course 0', new Date(), 100, 'Lorem ipsum dolor'),

      fixture = TestBed.createComponent(CoursesListItemComponent);
    sut = fixture.componentInstance;
    sut.courseData = course;
    deleteMethodSpy = spyOn(sut, 'deleteCourse');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  it('should call deleteMethod by clicking delete button', () => {
    const deleteButton = fixture.debugElement.query(By.css('.list-item--controls :last-child'));
    deleteButton.triggerEventHandler('click', null);
    expect(deleteMethodSpy).toHaveBeenCalled();
  });
});

