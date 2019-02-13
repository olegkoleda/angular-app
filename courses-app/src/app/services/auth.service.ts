import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private key = 'angular-app-user';
  private BASE_URL = 'http://localhost:3004';


  public login(login: string, password: string) {
    return this.http.post<any>(`${this.BASE_URL}/auth/login`, { login: login, password: password })
        .pipe(map(resp => {
          console.log(resp);
            // login successful if there's a jwt token in the response
            if (resp) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(resp));
            }

            return resp;
        }));
}

  // public login(email: string, password: string): void {
  //   localStorage.setItem(this.key, JSON.stringify({
  //     'email': email,
  //     'password': password,
  //     'token': token,
  //   }));
  // }

  public logout(): void {
    localStorage.removeItem(this.key);
  }

  public isAuthenticated (): boolean {
    return !!localStorage.getItem(this.key);
  }

  public getUserInfo(): string {
    return JSON.parse(localStorage.getItem(this.key)).email;
  }
}
