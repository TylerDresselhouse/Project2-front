import { UserBoardRole } from './boarduserrole.model';

export class Board {
    id: number;
    boardName: string;
    boardUserRole: UserBoardRole;

    constructor(id: number, boardName: string, boardUserRole: UserBoardRole) {
        this.id = id;
        this.boardName = boardName;
        this.boardUserRole = boardUserRole;
    }
}
