import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCourseFreshness]'
})
export class CourseFreshnessDirective {
  private readonly DAYS_14: number = 12096e5;

  private  currentDate: number = Date.now();

  @Input() appCourseFreshness: Date;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // if (this.creationDate.getTime() < this.currentDate && this.creationDate.getTime() >= this.currentDate - this.DAYS_14) {
    //   this.renderer.addClass(this.el.nativeElement, 'fresh');
    // } else if (this.creationDate.getTime() > this.currentDate) {
    //   this.renderer.addClass(this.el.nativeElement, 'upcoming');
    // }
    this.log();

   }
 log() {
  console.log(this.appCourseFreshness);
  console.log(this.el.nativeElement);
 }

}
