import { Component, OnInit } from '@angular/core';
import { AsbUser } from '../../models/asbuser.model';
import { Board } from '../../models/board.model';
import { InviteService } from '../../services/invite.service';
import { UserBoardRole } from '../../models/boarduserrole.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  invitedUser: AsbUser;
  newBoard: Board;
  userFound: boolean;

  constructor(private invService: InviteService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.invitedUser = new AsbUser(null, null, null, null, null);
    this.userFound = false;
  }

  searchUser(username): void {
    this.invService.getUser(username)
      .subscribe(data => {
        if (data != null) {
          this.userFound = true;
          this.invitedUser = data;
        } });
    // get user by username
    // get board by board id
    // add user to board
  }

// uId: number, boardId: number, role: UserBoardRole
  inviteUser(createC, moveC, editC, inviteU, createS) {
    const role = new UserBoardRole(null, 'Custom Role',
      createC, moveC, editC, inviteU, createS);
    const boardId = +this.route.snapshot.paramMap.get('id');
    this.invService.addUserToBoard(this.invitedUser.id, boardId , role)
      .subscribe(data => console.log(data));
    //   .subscribe(data => console.log(data) );
  }
}
