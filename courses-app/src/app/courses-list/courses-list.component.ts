import { Component, OnInit } from '@angular/core';
import { Course } from './course.module';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  public coursesData: Course[] = [
    new Course(0, 'Course 0', new Date(), 100, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem ipsum.'),
    new Course(1, 'Course 1', new Date(), 200, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem ipsum.'),
    new Course(2, 'Course 2', new Date(), 300, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem ipsum.'),
    new Course(3, 'Course 3', new Date(), 400, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem ipsum.'),
    new Course(4, 'Course 4', new Date(), 500, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem ipsum.'),
  ];

  constructor() { }

  ngOnInit() {
  }

  logCourseId(event) {
    console.log(event);
  }

}
