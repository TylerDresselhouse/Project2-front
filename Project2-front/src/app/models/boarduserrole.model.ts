export class UserBoardRole {
    burId: number;
    roleName: string;
    createCard: boolean;
    moveCard: boolean;
    editCard: boolean;
    inviteUser: boolean;
    createSwimLane: boolean;

    constructor(burId: number, roleName: string, createCard: boolean, moveCard: boolean,
        editCard: boolean, inviteUser: boolean, createSwimLane: boolean) {
            this.burId = burId;
            this.roleName = roleName;
            this.createCard = createCard;
            this.moveCard = moveCard;
            this.editCard = editCard;
            this.inviteUser = inviteUser;
            this.createSwimLane = createSwimLane;
        }
}
