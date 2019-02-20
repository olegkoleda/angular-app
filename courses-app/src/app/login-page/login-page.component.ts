import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {
  private email = '';
  private password = '';
  private loginSubscription;

  constructor(private authService: AuthService, private router: Router) { }

  public login(): void {
    this.loginSubscription = this.authService.login(this.email, this.password).subscribe((res) => {
      this.router.navigate(['courses']);
      },
      (error: HttpErrorResponse) => console.log(error)
      );
  }
  public ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }
}
