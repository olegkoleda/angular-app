import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => { service = new CoursesService(); });

  it('CoursesService should return and delete courses work', () => {
    const length = service.getCourses().length;
    expect(service.getCourses().length).toEqual(length);
    service.deleteCourse(0);
    expect(service.getCourses().length).toEqual(length - 1);
  });

  it('CoursesService should create courses work', () => {
    const length = service.getCourses().length;
    service.createCourse('test', new Date(), 123, 'test', 1);
    expect(service.getCourses().length).toEqual(length + 1);
  });
});
