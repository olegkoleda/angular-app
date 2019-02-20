import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent {
  private pageCounter = 1;

  @Output() pageNumber: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  public logLoadMore() {
    this.pageNumber.emit(this.pageCounter++);
  }
}
