import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public user = {};
  private usernameSubscription;
  constructor(private authService: AuthService, private router: Router) { }

  public ngOnInit() {
    this.usernameSubscription = this.authService.getUserInfo().subscribe(res => this.user = res);
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['login']);

  }

  public isAuth(): boolean {
    return this.authService.isAuthenticated();
  }

  public ngOnDestroy() {
    this.usernameSubscription.unsubscribe();
  }
}
