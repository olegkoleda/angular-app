import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinnerObservable = new Subject<boolean>();

  constructor() { }

  init() {
    return this.spinnerObservable;
  }

  show() {
    this.spinnerObservable.next(true);
  }

  hide() {
    this.spinnerObservable.next(false);
  }
}
