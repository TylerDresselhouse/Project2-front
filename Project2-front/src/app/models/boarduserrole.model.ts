export class UserBoardRole {
    burId: number;
    roleName: string;
    createCard: boolean;
    editCard: boolean;
    deleteCard: boolean;
    inviteUser: boolean;
    removeUser: boolean;
    createSwimLane: boolean;
    deleteSwimLane: boolean;
    createTask: boolean;
    deleteTask: boolean;

    constructor(burId: number, roleName: string, createCard: boolean,
        editCard: boolean, deleteCard: boolean, inviteUser: boolean,
        removeUser: boolean, createSwimLane: boolean, deleteSwimLane: boolean,
        createTask: boolean, deleteTask: boolean) {
            this.burId = burId;
            this.roleName = roleName;
            this.createCard = createCard;
            this.editCard = editCard;
            this.deleteCard = deleteCard;
            this.inviteUser = inviteUser;
            this.removeUser = removeUser;
            this.createSwimLane = createSwimLane;
            this.deleteSwimLane = deleteSwimLane;
            this.createTask = createTask;
            this.deleteTask = deleteTask;
        }
}
