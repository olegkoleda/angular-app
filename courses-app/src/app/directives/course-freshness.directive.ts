import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCourseFreshness]'
})
export class CourseFreshnessDirective implements OnInit {
  private readonly DAYS_14: number = 12096e5;

  private currentDate: number = Date.now();
  private creationTime: number;

  @Input('appCourseFreshness') creationDate: Date;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.creationTime = this.creationDate.getTime();

    if (this.creationTime < this.currentDate && this.creationTime >= this.currentDate - this.DAYS_14) {
      this.setCourseStyle('fresh');
    } else if (this.creationTime > this.currentDate) {
        this.setCourseStyle('upcoming');
      }
  }

  setCourseStyle (className: string ) {
    this.renderer.addClass(this.el.nativeElement, className);
  }
}
