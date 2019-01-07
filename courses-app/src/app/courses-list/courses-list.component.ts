import { Component, OnInit } from '@angular/core';
import { Course } from './course.module';
import { CoursesFilterPipe } from '../pipes/courses-filter.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [CoursesFilterPipe],
})
export class CoursesListComponent implements OnInit {

  public coursesData: Course[] = [
    // tslint:disable:max-line-length
    new Course(0, 'Course 0', new Date(2018, 11, 10), 10, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem', true ),
    new Course(1, 'Course 1', new Date(2018, 11, 27), 200, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem', false ),
    new Course(2, 'Course 2', new Date(2018, 12, 1), 300, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem', true ),
    new Course(3, 'Course 3', new Date(2018, 12, 12), 400, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem', false ),
    new Course(4, 'Course 4', new Date(2018, 11, 19), 500, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem', true ),
  ];

  public initialData: Course[] = this.coursesData.slice();

  constructor(private coursesFilterPipe: CoursesFilterPipe) { }

  ngOnInit() {
  }

  logCourseId(event) {
    console.log(event);
  }

  filterCourses(event) {
    console.log(!event);
    this.coursesData = (!event)
                                ? this.initialData
                                : this.coursesFilterPipe.transform(this.initialData, event);
    console.log(this.coursesData);
  }

}
