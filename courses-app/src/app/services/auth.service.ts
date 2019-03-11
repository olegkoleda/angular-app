import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  private key = 'angular-app-user';
  private BASE_URL = 'http://localhost:3004';


  public login(login: string, password: string) {
    const option = JSON.stringify({ login, password });    
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
  }

  public isAuthenticated (): boolean {
    return !!localStorage.getItem(this.key);
  }

  public getUserInfo() {
    return this.http.post<any>(`${this.BASE_URL}/auth/userinfo`, httpOptions);
  }
}
