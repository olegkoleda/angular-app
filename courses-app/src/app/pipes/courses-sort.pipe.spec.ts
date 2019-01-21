import { CoursesSortPipe } from './courses-sort.pipe';
import { Course } from '../courses-list/course.module';

describe('CoursesSortPipe', () => {
  it('create an instance', () => {
    const pipe = new CoursesSortPipe();
    expect(pipe).toBeTruthy();
  });

  it('sort array correct', () => {
    const pipe = new CoursesSortPipe();
    const  coursesData: Course[] = [
      {id: 0, title: 'test', creationDate: new Date(2019, 0, 5), duration: 100, description: 'test', rating: 5},
      {id: 1, title: 'test', creationDate: new Date(2018, 11, 27), duration: 100, description: 'test', rating: 5},
      {id: 2, title: 'test', creationDate: new Date(2018, 12, 15), duration: 100, description: 'test', rating: 5},
      {id: 3, title: 'test', creationDate: new Date(2018, 12, 20), duration: 100, description: 'test', rating: 5},
      {id: 4, title: 'test', creationDate: new Date(2018, 11, 19), duration: 100, description: 'test', rating: 5}];

      const transformedArr = pipe.transform(coursesData);

      const expectedArr = [...coursesData].sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());

      transformedArr.forEach((value, i) => expect(value.id).toEqual(expectedArr[i].id));
  });
});
