import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private key = 'angular-app-user';
  private createToken(): string {
    return Math.random().toString(16).slice(2, 12);
  }

  public login(email: string, password: string): void {
    const token = this.createToken();
    localStorage.setItem(this.key, JSON.stringify({
      'email': email,
      'password': password,
      'token': token,
    }));
  }

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
