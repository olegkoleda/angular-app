import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { Mocks } from './mocks';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  public coursesData :Course[];

  constructor() { }

  ngOnInit() {
    this.coursesData =  new Array(6).fill(0)
      .map((val, i) =>  new Mocks(i, `Course ${i}`)); 
  }

  logCourseId(event) {
    console.log(event);
  }

}
