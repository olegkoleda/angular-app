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
    this.getCourses();
  }

  public getCourses() {
    this.coursesData = this.coursesService.getCourses();
    this.initialData = [...this.coursesData];
  }
  public deleteCourse(id): void {
    this.coursesService.deleteCourse(id);
    this.coursesData = this.coursesData.filter((course) => course.id !== id);
    this.initialData = [...this.coursesData];
  }

  public filterCourses(value) {
    this.coursesData = this.coursesFilterPipe.transform(this.initialData, value);
  }

}
