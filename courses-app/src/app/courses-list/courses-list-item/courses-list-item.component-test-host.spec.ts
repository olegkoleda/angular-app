import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';
import { Component } from '@angular/core';
import { Course } from '../course.module';
import { By } from '@angular/platform-browser';
import { CourseFreshnessDirective } from 'src/app/directives/course-freshness.directive';
import { CourseDurationPipe } from 'src/app/pipes/course-duration.pipe';

@Component({
  template: `
  <app-courses-list-item
  [courseData]="courseData"
  (logId)="deleteCourse($event)">
  </app-courses-list-item>`
})

class TestHostComponent {
  public courseData: Course = {id: 999, title: 'test', creationDate: new Date(), duration: 100, description: 'test', rating: 5};
  public deletedCourseId: number;
  public deleteCourse(deletedCourseId: number) { this.deletedCourseId = deletedCourseId; }
}

describe('CoursesListItemComponent test-host', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListItemComponent, TestHostComponent, CourseFreshnessDirective, CourseDurationPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(testHost).toBeTruthy();
  });

  // it('should delete course', () => {
  //   fixture.detectChanges();
  //   const deleteButton =  fixture.debugElement.query(By.css('.list-item--controls :last-child'));
  //   deleteButton.triggerEventHandler('click', null);
  //   expect(testHost.deletedCourseId).toEqual(999);
  // });
});
