import { IUser } from '../interfaces/user';

export class User implements IUser {
    public readonly token: string;
    public readonly email: string;
    public readonly password: string;

    constructor(token: string, email: string, password: string) {
        this.token = token;
        this.email = email;
        this.password = password;
    }
}
