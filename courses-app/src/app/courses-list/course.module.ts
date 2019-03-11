import { ICourse } from '../interfaces/course';

export class Course implements ICourse {
    public id: number;
    public name: string;
    public date: Date;
    public length: number;
    public description: string;
    public isTopRated: boolean;

    constructor(id: number, title: string, creationDate: Date, duration: number, description: string, rating: boolean ) {
        this.id = id;
        this.name = title;
        this.date = creationDate;
        this.length = duration;
        this.description = description;
        this.isTopRated = rating;
    }
}
