import { Card } from './card.model';

export class SwimLane {
    id: number;
    name: string;
    cards: Card[];

    constructor(id: number, name: string, cards: Card[]) {
        this.id = id;
        this.name = name;
        this.cards = cards;
    }
}
