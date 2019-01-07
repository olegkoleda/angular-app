import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../course.module';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss']
})
export class CoursesListItemComponent implements OnInit {

  @Input() courseData: Course;
  @Output() logId: EventEmitter<number> = new EventEmitter<number>();

  public objectStyle;
  constructor() { }

  ngOnInit() {
    this.objectStyle = {
      'top-rated': this.courseData.topRated,
    };
  }

  deleteCourse() {
    this.logId.emit(this.courseData.id);
  }

}
