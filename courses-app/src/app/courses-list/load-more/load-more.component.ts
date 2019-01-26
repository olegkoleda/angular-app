import { Component } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent {

  constructor() { }

  public logLoadMore() {
    console.log('Load More!!!');
  }
}
