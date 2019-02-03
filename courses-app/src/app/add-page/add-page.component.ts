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
  public title: string;
  public description: string;
  public date: string;
  public duration: number;
  public courseId: number;
  public courseData: Course;


  constructor(private route: ActivatedRoute, private coursesService: CoursesService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.courseId = data['id'];
      if (this.courseId) {
        this.courseData = this.coursesService.getById(this.courseId);
        console.log(this.courseData);
        // // tslint:disable-next-line:no-unused-expression
        // { this.title, this.description, this.date, this.duration} = this.courseData;
        // this.title = this.courseData.title;
      }
    });


  }

  public save() {
    console.log('Saved');
    this.router.navigate(['courses']);
  }

  public cancel() {
    console.log('Canceled');
    this.router.navigate(['courses']);
  }
}
