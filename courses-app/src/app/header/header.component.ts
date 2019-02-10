import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService, private router: Router) { }

  public logout() {
    this.authService.logout();
    console.log('LOG OUT');
    this.router.navigate(['login']);

  }

  public isAuth(): boolean {
    return this.authService.isAuthenticated();
  }
}
