import { SwimLane } from './swimlane.model';

export class Board {
    id: number;
    name: string;
    swimLanes: SwimLane[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
