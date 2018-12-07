import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  public coursesData :Course[];

  constructor() { }

  ngOnInit() {
    this.coursesData = [
      {
        id: 1,
        title: 'Course 1',
        creationDate: new Date(),
        duration: 111,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Quibusdam maiores iusto sapiente, non velit perspiciatis magnam doloremque veritatis.',
      },
      {
        id: 2,
        title: 'Course 2',
        creationDate: new Date(),
        duration: 222,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Quibusdam maiores iusto sapiente, non velit perspiciatis magnam doloremque veritatis.',
      },
      {
        id: 3,
        title: 'Course 3',
        creationDate: new Date(),
        duration: 333,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Quibusdam maiores iusto sapiente, non velit perspiciatis magnam doloremque veritatis.',
      },
      {
        id: 4,
        title: 'Course 4',
        creationDate: new Date(),
        duration: 444,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus? Quibusdam maiores iusto sapiente, non velit perspiciatis magnam doloremque veritatis.',
      },
    ]
  }

  logCourseId(event) {
    console.log(event);
  }

}
