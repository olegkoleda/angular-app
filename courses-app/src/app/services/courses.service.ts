import { Injectable } from '@angular/core';
import { Course } from '../courses-list/course.module';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private idCounter: number = 5;
  private courses: Course[] = [
    // tslint:disable:max-line-length
    new Course(0, 'Course 0', new Date(2019, 0, 11), 10, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem', 5),
    new Course(1, 'Course 1', new Date(2019, 0, 12), 200, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem', 4),
    new Course(2, 'Course 2', new Date(2018, 12, 15), 300, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem', 3),
    new Course(3, 'Course 3', new Date(2018, 12, 20), 400, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem', 2),
    new Course(4, 'Course 4', new Date(2018, 11, 19), 500, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Lorem', 0),
  ];

  constructor() { }

  public getCourses(): Observable<Course[]> {
    return of (this.courses);
  }
  public createCourse(title: string, creationDate: Date, duration: number, description: string, rating: number ) {
    this.courses = [...this.courses,
      new Course(this.idCounter++, title, creationDate, duration, description, rating)
    ];
  }
  public getById(couseId: number): Course {
    return this.courses.filter((course) => course.id === couseId)[0];
  }
  public updateCourse() {
// inplent!!!!!!!
  }
  public deleteCouse(couseId: number) {
    this.courses.filter((course) => course.id !== couseId);
  }

}
