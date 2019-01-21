import { ICourse } from '../interfaces/course';

export class Course implements ICourse {
    public id: number;
    public title: string;
    public creationDate: Date;
    public duration: number;
    public description: string;
    public rating: number;

    constructor(id: number, title: string, creationDate: Date, duration: number, description: string, rating: number ) {
        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.duration = duration;
        this.description = description;
        this.rating = rating;
    }
}
