import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class CourseDurationPipe implements PipeTransform {

  transform(minutes: number): string {
    return `${(minutes >= 60 ) ? Math.floor(minutes / 60) + 'h' : ''} ${minutes % 60}min`;
  }

}
