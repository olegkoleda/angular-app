import { Component } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { Store } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import * as appState from '../reducers';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  private email = '';
  private password = '';

  constructor(private spinnerService: SpinnerService, private store: Store<appState.State>) { }

  public login(): void {
    this.spinnerService.show();
    this.store.dispatch(new AuthActions.Login({login: this.email, password: this.password}));
  }
}
