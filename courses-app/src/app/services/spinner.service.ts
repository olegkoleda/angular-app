import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public spinnerObservable = new Subject<boolean>();

  constructor() { }

  show() {
    this.spinnerObservable.next(true);
  }

  hide() {
    this.spinnerObservable.next(false);
  }
}
