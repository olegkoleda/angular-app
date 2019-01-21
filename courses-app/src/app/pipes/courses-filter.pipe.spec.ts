import { CoursesFilterPipe } from './courses-filter.pipe';
import { Course } from '../courses-list/course.module';

describe('CoursesFilterPipe', () => {
  let  coursesData: Course[];
  beforeEach(() => {
      coursesData = [
      {id: 0, title: 'test', creationDate: new Date(2019, 0, 5), duration: 100, description: 'test', rating: 5},
      {id: 1, title: 'test', creationDate: new Date(2018, 11, 27), duration: 100, description: 'test', rating: 5},
      {id: 2, title: 'test', creationDate: new Date(2018, 12, 15), duration: 100, description: 'test', rating: 5},
      {id: 3, title: 'test', creationDate: new Date(2018, 12, 20), duration: 100, description: 'test', rating: 5},
      {id: 4, title: 'test', creationDate: new Date(2018, 11, 19), duration: 100, description: 'test', rating: 5}];
  });

  it('create an instance', () => {
    const pipe = new CoursesFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('filter without term correct', () => {
    const pipe = new CoursesFilterPipe();
      const transformedArr = pipe.transform(coursesData);

      expect(transformedArr.length).toEqual(coursesData.length);
  });

  it('filter with term correct', () => {
    const pipe = new CoursesFilterPipe();
    const term = '1';
      const transformedArr = pipe.transform(coursesData, term);

      const expectedArr = coursesData.filter((item) => new RegExp(term, 'gi').test(item.title));

    expect(transformedArr.length).toEqual(expectedArr.length);
  });
});
