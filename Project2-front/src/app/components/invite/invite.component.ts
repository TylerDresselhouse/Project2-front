import { Component, OnInit } from '@angular/core';
import { AsbUser } from '../../models/asbuser.model';
import { Board } from '../../models/board.model';
import { InviteService } from '../../services/invite.service';
import { UserBoardRole } from '../../models/boarduserrole.model';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  invitedUser: AsbUser;
  newBoard: Board;
  userFound: boolean;
  boardId: number;
  boardName: String;

  constructor(private invService: InviteService, private route: ActivatedRoute,
    private alertService: AlertService, private authService: AuthenticationService,
    private navService: NavbarService) { }

  ngOnInit() {
    this.authService.checkCredentials();
    this.invitedUser = new AsbUser(null, null, null, null, null);
    this.boardId = +this.route.snapshot.paramMap.get('id');
    this.userFound = false;
    const boards: Board[] = JSON.parse(localStorage.getItem('boards'));
    for (let i = 0; i < boards.length; i++) {
      if (boards[i].id === this.boardId) {
        this.boardName = boards[i].name;
      }
    }
    this.navService.show();
    this.navService.showBoardMembers();
  }

  searchUser(username): void {
    this.invService.getUser(username)
      .subscribe(data => {
        if (data != null) {
          this.alertService.success('Successfully found user');
          this.userFound = true;
          this.invitedUser = data;
        } else {
          this.alertService.error('That user does not exist');
          this.userFound = false;
        }}, err => this.alertService.error('Invalid Input'));
  }

  inviteUser(createC, moveC, editC, inviteU, createS) {
    const role = new UserBoardRole(null, 'Custom Role',
      createC, moveC, editC, inviteU, createS);
    this.invService.addUserToBoard(this.invitedUser.id, this.boardId , role)
      .subscribe(data => { console.log(data);
        if (data != null) {
          this.alertService.success('Added ' + this.invitedUser.username + ' as a board member');
          this.userFound = false;
        } else {
          this.alertService.error(this.invitedUser.username + ' is already a member of this board');
          this.userFound = false;
        }
      });
  }
}
