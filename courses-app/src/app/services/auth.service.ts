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
    const option = JSON.stringify({ login: login, password: password });
    return this.http.post<any>(`${this.BASE_URL}/auth/login`, option)
        .pipe(map(resp => {
            if (resp) {
                localStorage.setItem(this.key, JSON.stringify(resp));
            }
            return resp;
        }));
}


  public logout(): void {
    localStorage.removeItem(this.key);
  }

  public isAuthenticated (): boolean {
    return !!localStorage.getItem(this.key);
  }

  public getUserInfo() {
    return this.http.get<any>('/auth/userinfo');
  }
}
