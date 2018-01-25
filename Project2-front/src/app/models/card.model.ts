import { Task } from './task.model';

export class Card {
    id: number;
    difficulty: number;
    title: string;
    description: string;
    tasks: Task[];

    constructor(id: number, difficulty: number, title: string, description: string, tasks: Task[]) {
        this.id = id;
        this.difficulty = difficulty;
        this.title = title;
        this.description = description;
        this.tasks = tasks;
    }
}
