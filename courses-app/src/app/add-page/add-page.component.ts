import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { Course } from '../courses-list/course.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
  private new = true;
  private name: string;
  private description: string;
  private date: Date;
  private length: number;
  private courseId: number;
  private courseData: Course;

  public addForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    date: new FormControl(''),
    length: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.courseId = parseInt(this.route.snapshot.params.id, 10);

    if (this.courseId) {
      this.new = false;
      this.coursesService.getById(`${this.courseId}`).subscribe(res => {
        this.courseData = res;
        this.name = this.courseData.name;
        this.description = this.courseData.description;
        this.length = this.courseData.length;
        this.date = this.courseData.date;
      });
    }
  }

  public click() {
    console.log( this.addForm);
  }

  public save() {
    if (this.new) {
      this.coursesService
        .createCourse({
          name: this.name,
          date: this.date,
          length: this.length,
          description: this.description,
          isTopRated: true
        })
        .subscribe(res => {
          console.log(res);
          this.router.navigate(['courses']);
        });
    }
    // this.coursesService.updateCourse(this.courseId, 'title', this.title);
    this.router.navigate(['courses']);
  }

  public cancel() {
    this.router.navigate(['courses']);
  }
}
