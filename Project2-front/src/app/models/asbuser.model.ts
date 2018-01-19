export class AsbUser {
    uId: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;

    constructor(uId: number, username: string, password: string, firstName: string, lastName: string) {
        this.uId = uId;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
