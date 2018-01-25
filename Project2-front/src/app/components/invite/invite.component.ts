import { Component, OnInit } from '@angular/core';
import { AsbUser } from '../../models/asbuser.model';
import { Board } from '../../models/board.model';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  newUser: AsbUser;
  newBoard: Board;

  constructor() { }

  ngOnInit() {
  }

  inviteUser(): void {
    // get user by username
    // get board by board id
    // add user to board
  }
}
