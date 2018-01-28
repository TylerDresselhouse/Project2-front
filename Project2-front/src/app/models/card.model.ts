import { Task } from './task.model';

export class Card {
    id: number;
    difficulty: number;
    title: string;
    description: string;
    tasks: Task[];
    order: number;

    constructor(id: number, difficulty: number, title: string, description: string, tasks: Task[], order: number) {
        this.id = id;
        this.difficulty = difficulty;
        this.title = title;
        this.description = description;
        this.tasks = tasks;
        this.order = order;
    }
}
