import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Course } from './course.module';
import { CoursesFilterPipe } from '../pipes/courses-filter.pipe';
import { CoursesService } from '../services/courses.service';
import { SpinnerService } from '../services/spinner.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as appState from '../reducers';
import * as  CoursesActions from '../actions/courses.actions';

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

  private getCoursesSubscription;
  private filterCoursesSubscription;
  private deleteCoursesSubscription;

  constructor(
    private coursesService: CoursesService,
    private spinnerService: SpinnerService,
    private store: Store<appState.State>
  ) {}


  ngOnInit() {
    this.getCoursesSubscription =
    this.store
    .pipe(
      select(appState.selectAllCourses),
    )
    .subscribe((res: Course[]) => {
      this.coursesData = [...this.coursesData, ...res];
    });
    this.getCourses(0);
  }

  public getCourses(page?): void {
    this.store.dispatch(new CoursesActions.Get(page));
  }

  public deleteCourse(courseId): void {
    this.store.dispatch(new CoursesActions.Remove(courseId));
  }

  public loadMore(page: number): void {
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
