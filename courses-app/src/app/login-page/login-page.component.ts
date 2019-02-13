import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public email = '';
  public password = '';

  constructor(private authService: AuthService, private router: Router) { }

  public login(): void {
    this.authService.login(this.email, this.password).subscribe((res) => {
      console.log(res);
      },
      (error: HttpErrorResponse) => console.log(error)
      );

    // console.log('Logged in successfully', this.email, this.password);
    // this.router.navigate(['courses']);
  }

}
