import { CourseDurationPipe } from './course-duration.pipe';

describe('CourseDurationPipe', () => {
  const calcTime = (minutes) => `${(minutes >= 60 ) ? Math.floor(minutes / 60) + 'h' : ''} ${minutes % 60}min`;
  it('create an instance', () => {
    const pipe = new CourseDurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('test minutes < 60', () => {
    const pipe = new CourseDurationPipe();
    const time = 40;
    const transformedTime = pipe.transform(time);
    expect(transformedTime).toBe(calcTime(time));
  });

  it('test minutes < 60', () => {
    const pipe = new CourseDurationPipe();
    const time = 120;
    const transformedTime = pipe.transform(time);
    expect(transformedTime).toBe(calcTime(time));
  });
});
