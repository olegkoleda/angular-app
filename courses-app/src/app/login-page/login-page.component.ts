import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SpinnerService } from '../services/spinner.service';
import { Store } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import * as fromAuth from '../reducers';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  private email = '';
  private password = '';
  private loginSubscription;

  constructor(private authService: AuthService, private router: Router, private spinnerService: SpinnerService, private store: Store<fromAuth.State>) { }

  public login(): void {
    this.spinnerService.show();
    this.store.dispatch(new AuthActions.Login({login: this.email, password: this.password}));
  }
}
