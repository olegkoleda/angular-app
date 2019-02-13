import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  private key = 'angular-app-user';
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const authReq = req.clone({
      headers: req.headers.set('Authorization', JSON.parse(localStorage.getItem(this.key)).token)
    });
    return next.handle(authReq);
  }
}
