import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService) { }

  public logout() {
    this.authService.logout();
    console.log('LOG OUT');
  }

  public isAuth(): boolean {
    return this.authService.isAuthenticated();
  }
}
