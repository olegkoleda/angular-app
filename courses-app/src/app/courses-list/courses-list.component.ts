import { Component, OnInit } from '@angular/core';
import { Course } from './course.module';
import { CoursesFilterPipe } from '../pipes/courses-filter.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [CoursesFilterPipe],
})
export class CoursesListComponent {

  public coursesData: Course[] = [
    // tslint:disable:max-line-length
    new Course(0, 'Course 0', new Date(2019, 0, 11), 10, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem', 5),
    new Course(1, 'Course 1', new Date(2019, 0, 12), 200, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem', 4),
    new Course(2, 'Course 2', new Date(2018, 12, 15), 300, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem', 3),
    new Course(3, 'Course 3', new Date(2018, 12, 20), 400, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem', 2),
    new Course(4, 'Course 4', new Date(2018, 11, 19), 500, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem', 0),
  ];
  public initialData: Course[] = [...this.coursesData];

  constructor(private coursesFilterPipe: CoursesFilterPipe) { }

  logCourseId(event) {
    console.log(event);
  }

  filterCourses(value) {
    this.coursesData = this.coursesFilterPipe.transform(this.initialData, value);
  }

}
