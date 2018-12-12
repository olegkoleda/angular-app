import { Course } from './course';

export class Mocks extends Course {

    constructor(id: number, title: string) {
        super();
        this.id = id;
        this.title = title;
        this.creationDate = this.createDate();
        this.duration = this.createDuration();
        this.description = this.createDescription();
    }
    private createDate() { 
        return new Date(); 
    } 
    
    private createDuration() { 
        return this.id + 100; 
    } 

    private createDescription() { 
        return 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus?' + 
         'Quibusdam maiores iusto sapiente, non velit perspiciatis magnam doloremque veritatis.';
    } 
} 

