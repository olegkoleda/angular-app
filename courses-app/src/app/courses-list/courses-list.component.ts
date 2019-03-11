import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Course } from './course.module';
import { CoursesFilterPipe } from '../pipes/courses-filter.pipe';
import { CoursesService } from '../services/courses.service';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [CoursesFilterPipe]
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public coursesData: Course[] = [];
  public course: Course[];
  public initialData: Course[] = [];

  private page = 0;
  private getCoursesSubscription;
  private filterCoursesSubscription;
  private deleteCoursesSubscription;

  constructor(
    private coursesService: CoursesService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.getCourses(this.page);
  }

  public getCourses(page): void {
    this.spinnerService.show();
    this.getCoursesSubscription = this.coursesService
      .getCourses(page)
      .subscribe((res: Course[]) => {
        this.coursesData = [...this.coursesData, ...res];
        this.spinnerService.hide();
      });
  }

  public deleteCourse(courseId): void {
    this.spinnerService.show();
    this.deleteCoursesSubscription = this.coursesService.deleteCourse(courseId).subscribe(res => {
      this.coursesData = this.coursesData.filter( course => course.id !== courseId);
      this.spinnerService.hide();
    });
  }

  public loadMore(page: number): void {
    this.page = page;
    this.getCourses(page);
  }

  public filterCourses(term: string): void {
    this.spinnerService.show();
    this.filterCoursesSubscription = this.coursesService
      .getCourses(0, term)
      .subscribe((res: Course[]) => {
        this.spinnerService.hide();
        return this.coursesData = res;
      });
  }

  ngOnDestroy(): void {
    this.getCoursesSubscription.unsubscribe();
    if (this.filterCoursesSubscription) { this.filterCoursesSubscription.unsubscribe(); }
    if (this.deleteCoursesSubscription) { this.deleteCoursesSubscription.unsubscribe(); }
  }
}
