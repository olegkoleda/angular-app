import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {
public showSpinner = false;
private spinnerSubscription: Subscription;
  constructor(private spinner: SpinnerService) {
   }

  ngOnInit() {
    this.spinnerSubscription = this.spinner.init().subscribe(flag => {
      this.showSpinner = flag;
    });
  }

  ngOnDestroy(): void {
    this.spinnerSubscription.unsubscribe();
  }
}
