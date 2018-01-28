import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  visible: boolean;
  boardMembers: boolean;
  burndown: boolean;

  constructor() { this.visible = false;
    this.boardMembers = false;
    this.burndown = false; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  hideBoardMembers() { this.boardMembers = false; }

  showBoardMembers() { this.boardMembers = true; }

  toggleBoardMembers() { this.boardMembers = !this.boardMembers; }

  hideBurndown() { this.burndown = false; }

  showBurndown() { this.burndown = true; }

  toggleBurndown() { this.burndown = !this.burndown; }

}
