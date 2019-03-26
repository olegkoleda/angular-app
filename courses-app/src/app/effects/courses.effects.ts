import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
  CoursesActionTypes,
  Get,
  GetSuccess,
  Add,
  Remove
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
    exhaustMap((page) =>
      this.coursesService.getCourses(page).pipe(
        map(courses => new GetSuccess(courses)),
      )
    )
  );
}
