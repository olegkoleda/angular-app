import { Component, OnInit } from '@angular/core';
import { Course } from './course.module';
import { CoursesFilterPipe } from '../pipes/courses-filter.pipe';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [CoursesFilterPipe],
})
export class CoursesListComponent implements OnInit {

  public coursesData: Course[] = [];

  public initialData: Course[] = [];

  constructor(private coursesFilterPipe: CoursesFilterPipe, private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesData = this.coursesService.getCourses();
    this.initialData = [...this.coursesData];
  }

  logCourseId(event) {
    console.log(event);
  }

  filterCourses(value) {
    this.coursesData = this.coursesFilterPipe.transform(this.initialData, value);
  }

}
