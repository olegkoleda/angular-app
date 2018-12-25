import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../courses-list/course.module';

@Pipe({
  name: 'coursesSort'
})
export class CoursesSortPipe implements PipeTransform {

  transform(courses: Course[]): Course[] {
    return courses.sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());
  }

}
