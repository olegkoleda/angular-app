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
  private localData = JSON.parse(localStorage.getItem(this.key));
  private token = (this.localData) ?  '' + JSON.parse((JSON.stringify(this.localData.token))) : '';
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
