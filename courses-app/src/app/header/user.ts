import { IUser } from '../interfaces/user';

export class User implements IUser {
    public token: string;
    public email: string;
    public password: string;

    constructor(token: string, email: string, password: string) {
        this.token = token;
        this.email = email;
        this.password = password;
    }
}
