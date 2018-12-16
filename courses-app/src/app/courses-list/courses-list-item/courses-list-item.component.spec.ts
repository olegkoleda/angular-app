import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';
import { Component } from '@angular/core';
import { Course } from '../course.module';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <app-courses-list-item
  [courseData]="courseData"
  (logId)="deleteCourse($event)">
  </app-courses-list-item>`
})

class TestHostComponent {
  public courseData: Course = {id: 999, title: 'test', creationDate: new Date(), duration: 100, description: 'test'};
  public deletedCourseId: number;
  public deleteCourse(deletedCourseId: number) { this.deletedCourseId = deletedCourseId; }
}

describe('CoursesListItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListItemComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    console.log(testHost, compiled);
    expect(testHost).toBeTruthy();
  });

  it('should delete course', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const deleteButton =  fixture.debugElement.query(By.css('.list-item--controls :last-child'));
    deleteButton.triggerEventHandler('click', null);
    expect(testHost.deletedCourseId).toEqual(999);
  });
});
