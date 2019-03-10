import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {
  private email = '';
  private password = '';
  private loginSubscription;

  constructor(private authService: AuthService, private router: Router, private spinnerService: SpinnerService) { }

  public login(): void {
    this.spinnerService.show();
    this.loginSubscription = this.authService.login(this.email, this.password).subscribe((res) => {
      this.spinnerService.hide();
      this.router.navigate(['courses']);
      },
      (error: HttpErrorResponse) => console.log(error)
      );
  }
  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }
}
