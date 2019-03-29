import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  CoursesActionTypes,
  Get,
  GetSuccess,
  Add,
  Remove,
  RemoveSuccsess
} from '../actions/courses.actions';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';
import { CoursesService } from '../services/courses.service';

@Injectable()
export class CoursesEffects {
  constructor(private actions$: Actions,
              private coursesService: CoursesService,
              private spinnerService: SpinnerService) {}

  @Effect()
  get$ = this.actions$.pipe(
    ofType<Get>(CoursesActionTypes.Get),
    map(action => action.payload),
    exhaustMap((page) => {
        this.spinnerService.show();
        return this.coursesService.getCourses(page).pipe(
          map(courses => {
            this.spinnerService.hide();
            return new GetSuccess(courses);
            }),
        )
    })
  );

  @Effect()
  remove$ = this.actions$.pipe(
    ofType<Remove>(CoursesActionTypes.Remove),
    map(action => action.payload),
    exhaustMap((id) => {
        this.spinnerService.show();
        return this.coursesService.deleteCourse(id).pipe(
          map(() => {
            this.spinnerService.hide();
            return new RemoveSuccsess(id);
            }),
        )
    })
  );
}
