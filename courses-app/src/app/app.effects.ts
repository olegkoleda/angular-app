import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AuthActionTypes,
  Login,
  LoginFailure,
  LoginSuccess,
} from './actions/auth.actions';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SpinnerService } from './services/spinner.service';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router,
              private spinnerService: SpinnerService) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    exhaustMap((auth) =>
      this.authService.login(auth).pipe(
        map(token => new LoginSuccess({ token })),
        catchError(error => of(new LoginFailure(error)))
      )
    )
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Logout),
    map(action => action.payload),
    map(() =>
      this.authService.logout()
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => {
      this.router.navigate(['courses']);
      this.spinnerService.hide();
    })
  );

  @Effect({ dispatch: false })
  loginFailure$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginFailure),
    tap(() => {
      this.spinnerService.hide();
    })
  );
}
