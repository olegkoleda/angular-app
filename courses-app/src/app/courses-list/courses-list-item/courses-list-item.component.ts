import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../course.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListItemComponent implements OnInit {

  @Input() courseData: Course;
  @Input() course: Course;
  @Output() deleteId: EventEmitter<number> = new EventEmitter<number>();

  public objectStyle = {
    'top-rated': false,
  };
  constructor(private router: Router) { }

  ngOnInit() {
    this.isTopRated(this.courseData.isTopRated);
  }

  public isTopRated (data: boolean) {
   this.objectStyle['top-rated'] = data;
  }

  public deleteCourse() {
    const confirmResult = confirm('Do you really want to delete this course?');
    if (confirmResult) {
      this.deleteId.emit(this.courseData.id);
    }
  }

  public goToEditPage() {
    this.router.navigate(['courses', this.courseData.id]);
  }

}
