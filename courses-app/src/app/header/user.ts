import { IUser } from '../interfaces/user.model';

export class User implements IUser {
    public id: number;
    public firstName: string;
    public lastName: string;
}
