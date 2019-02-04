import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { Course } from '../courses-list/course.module';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
  public new = false;
  public title: string;
  public description: string;
  public creationDate: Date;
  public duration: number;
  public courseId: number;
  public courseData: Course;


  constructor(private route: ActivatedRoute, private coursesService: CoursesService,
              private router: Router) { }

  ngOnInit() {
    this.courseId = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    if (this.courseId) {
      this.new = true;
      this.courseData = this.coursesService.getById(this.courseId);
      this.title = this.courseData.title;
      this.description = this.courseData.description;
      this.duration = this.courseData.duration;
      this.creationDate = this.courseData.creationDate;
    }

  }

  public save() {
    if (this.new) {
      this.coursesService.createCourse(this.title, this.creationDate, this.duration, this.description, 3);
    }
    this.coursesService.updateCourse(this.courseId, 'title', this.title);
    console.log('Saved');
    this.router.navigate(['courses']);
  }

  public cancel() {
    console.log('Canceled');
    this.router.navigate(['courses']);
  }
}
