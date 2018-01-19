import { Task } from './task.model';

export class Card {
    cId: number;
    difficulty: number;
    cTitle: string;
    cDescription: string;
    tasks: Task[];

    constructor(cId: number, difficulty: number, cTitle: string, cDescription: string, tasks: Task[]) {
        this.cId = cId;
        this.difficulty = difficulty;
        this.cTitle = cTitle;
        this.cDescription = cDescription;
        this.tasks = tasks;
    }
}
