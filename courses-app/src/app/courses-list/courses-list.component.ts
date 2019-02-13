import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Course } from './course.module';
import { CoursesFilterPipe } from '../pipes/courses-filter.pipe';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [CoursesFilterPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListComponent implements OnInit {

  public coursesData: Course[] = [];
  public course: Course[];

  public initialData: Course[] = [];

  constructor(private coursesFilterPipe: CoursesFilterPipe, private coursesService: CoursesService) { }

  ngOnInit() {
    this.getCourses();
  }

  public getCourses() {
    // this.coursesData = this.coursesService.getCourses().pipe(share());
    this.coursesService.getCourses().subscribe((res: Course[]) => {
      console.log(res);
      this.coursesData = res;
      this.initialData = [...this.coursesData];
    });
  }
  // public deleteCourse(id): void {
  //   this.coursesService.deleteCourse(id);
  //   this.coursesData = this.coursesData.filter((course) => course.id !== id);
  //   this.initialData = [...this.coursesData];
  // }

  public filterCourses(value) {
    this.coursesData = this.coursesFilterPipe.transform(this.initialData, value);
  }

}
