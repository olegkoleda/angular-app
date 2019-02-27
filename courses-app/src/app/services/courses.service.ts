import { Injectable } from '@angular/core';
import { Course } from '../courses-list/course.module';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private BASE_URL = 'http://localhost:3004/courses';
  private countToLoad = '10';

  constructor(private http: HttpClient) {}

  public getCourses(page): Observable<Course[]> {
    return this.http.get<Course[]>(this.BASE_URL, {
      params: { start: `${page * +this.countToLoad}`, count: this.countToLoad }
    });
  }

  public searchCourse(textFragment: string) {
    return this.http.get<Course[]>(this.BASE_URL, { params: { textFragment, count: this.countToLoad  } });
  }

  public createCourse(courseData: Object) {
    const options = JSON.stringify(courseData);
    console.log(options);
    return this.http.post<any>(this.BASE_URL, options, httpOptions).pipe(map(resp => resp));
  }

  public deleteCourse(id): Observable<Course[]> {
    return this.http.delete<Course[]>(`${this.BASE_URL}/${id}`);
  }

  public getById(id: string) {
    return this.http
      .get<Course>(`${this.BASE_URL}/${id}`)
      .pipe(map(resp => resp));
  }

  // public updateCourse(id, key, value) {
  //   this.courses = this.courses.map((course) => {
  //     if (course.id === id) {
  //       course[key] = value;
  //       return course;
  //     }
  //     return course;
  //   });
  // }
}
