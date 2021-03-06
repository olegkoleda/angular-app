import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import * as appState from '../reducers';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private store: Store<appState.State>) { }

  private key = 'angular-app-user';
  private BASE_URL = 'http://localhost:3004';


  public login(userData) {
    const option = JSON.stringify(userData);
    return this.http.post<any>(`${this.BASE_URL}/auth/login`, option, httpOptions)
        .pipe(map(resp => {
            if (resp) {
                localStorage.setItem(this.key, JSON.stringify(resp));
            }
            return resp;
        }));
}


  public logout(): void {
    this.router.navigate(['login']);
    localStorage.removeItem(this.key);
    this.store.dispatch(new AuthActions.Logout());
  }

  public isAuthenticated (): boolean {
    return !!localStorage.getItem(this.key);
  }

  public getUserInfo() {
    return this.http.post<any>(`${this.BASE_URL}/auth/userinfo`, httpOptions);
  }
}
