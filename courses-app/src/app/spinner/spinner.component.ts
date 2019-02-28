import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
public showSpinner = false;
private spinnerSubscription: Subscription;
  constructor(private spinner: SpinnerService) {
   }

  ngOnInit() {
    this.spinnerSubscription = this.spinner.spinnerObservable.subscribe(flag => {
      this.showSpinner = flag;
    });
  }

}
