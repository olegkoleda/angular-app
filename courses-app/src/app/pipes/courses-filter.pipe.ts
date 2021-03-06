import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../courses-list/course.module';

@Pipe({
  name: 'coursesFilter'
})
export class CoursesFilterPipe implements PipeTransform {

  transform(value: Course[], term?: string): any {
    if (!term) {
      return value; }
      const arr = value.filter((item) => new RegExp(term, 'gi').test(item.name));
    return arr;
  }
}
