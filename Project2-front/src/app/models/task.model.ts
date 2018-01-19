export class Task {
    tId: number;
    tDescription: string;
    completed: boolean;

    constructor(tId: number, tDescription: string, completed: boolean) {
        this.tId = tId;
        this.tDescription = tDescription;
        this.completed = completed;
    }
}
