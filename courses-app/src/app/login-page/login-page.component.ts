import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public email = '';
  public password = '';

  constructor(private authService: AuthService) { }

  public login(): void {
    this.authService.login(this.email, this.password);
    console.log('Logged in successfully', this.email, this.password);
  }

}
