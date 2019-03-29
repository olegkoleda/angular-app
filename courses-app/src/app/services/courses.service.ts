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
  private page = 0;

  constructor(private http: HttpClient) {}

  public getCourses(newPage?, textFragment?: string): Observable<Course[]> {
    this.page = newPage;
    const params = { start: `${this.page * +this.countToLoad}`, count: this.countToLoad };
    return this.http.get<Course[]>(this.BASE_URL, {
      params: (textFragment) ? {textFragment, ...params} : params
    });
  }

  public createCourse(courseData: Object) {
    const options = JSON.stringify(courseData);
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
