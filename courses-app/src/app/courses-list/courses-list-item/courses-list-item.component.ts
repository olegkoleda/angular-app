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

  public objectStyle = {
    'top-rated': false,
    'low-rated': false,
  };
  constructor() { }

  ngOnInit() {
    this.isTopRated(this.courseData.rating);
  }

  isTopRated (data: number) {
    if (data === 0) {
      return;
    } else if (data >= 3) {
      this.objectStyle['top-rated'] = true;
      return;
    } else {
      this.objectStyle['low-rated'] = true;
    }

  }

  deleteCourse() {
    this.logId.emit(this.courseData.id);
  }

}
