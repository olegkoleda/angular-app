import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private key = 'angular-app-user';
  private token = (localStorage.getItem(this.key)) ?  '' + JSON.parse((JSON.stringify(JSON.parse(localStorage.getItem(this.key)).token))) : '';
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const authReq = req.clone({
      headers: req.headers.set('Authorization', this.token)
    });
    return next.handle(authReq);
  }
}
