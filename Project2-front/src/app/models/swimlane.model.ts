import { Card } from './card.model';

export class SwimLane {
    slId: number;
    slName: string;
    cards: Card[];

    constructor(slId: number, slName: string, cards: Card[]) {
        this.slId = slId;
        this.slName = slName;
        this.cards = cards;
    }
}
