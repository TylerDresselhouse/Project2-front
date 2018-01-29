import { Card } from './card.model';

export class SwimLane {
    id: number;
    name: string;
    cards: Card[];

    constructor(slId: number, name: string, cards: Card[]) {
        this.id = slId;
        this.name = name;
        this.cards = cards;
    }
}
