import { Component, OnInit } from '@angular/core';
import { SwimLaneService } from '../../services/swim-lane.service';
import { AuthenticationService } from '../../services/authentication.service';
import { SwimLane } from '../../models/swimlane.model';
import { CardComponent } from '../card/card.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ActivatedRoute } from '@angular/router';
import { Board } from '../../models/board.model';
import { Card } from '../../models/card.model';
import { BurndownchartComponent } from '../burndownchart/burndownchart.component';
import { NavbarService } from '../../services/navbar.service';
import { PermissionsService } from '../../services/permissions.service';
import { UserBoardRole } from '../../models/boarduserrole.model';
import { AsbUser } from '../../models/asbuser.model';

@Component({
  selector: 'app-swim-lanes',
  templateUrl: './swim-lanes.component.html',
  styleUrls: ['./swim-lanes.component.css'],
  providers: [NgbModal, CardComponent],
})
export class SwimLanesComponent implements OnInit {

  swimLanes: SwimLane[];
  newSwimLane: SwimLane;
  card: Card;
  swimLane: SwimLane;
  id;
  boardName: String;
  userBoardRole: UserBoardRole;
  currUser: AsbUser;

  constructor(private swimLaneService: SwimLaneService,
    private authService: AuthenticationService, private route: ActivatedRoute, private modalService: NgbModal,
    private cardComponent: CardComponent, private navService: NavbarService, private permissionService: PermissionsService) { }

  ngOnInit() {
    this.authService.checkCredentials();
    this.navService.show();
    this.navService.showBoardMembers();
    this.navService.showBurndown();
    this.id = this.route.snapshot.paramMap.get('id');
    localStorage.setItem('currBoardId', this.id);
    this.swimLanes = this.getSwimLanes(0);
    this.getUserBoardRole(this.id);
  }

  getSwimLanes(lane: number): SwimLane[] {
    // this.id = JSON.parse(localStorage.getItem('id'));
    // return swimLanes;   // CHANGE THIS TO GET THE SWIMLANES OF THE BOARD PARAMETER
    const boards: Board[] = JSON.parse(localStorage.getItem('boards'));
    console.log(boards);
    for (let i = 0; i < boards.length; i++) {
        if (boards[i].id == this.id) {
          this.boardName = boards[i].name;
          console.log('SUCCESS ON ' + boards[i].id);
            return boards[i].swimLanes;
        } else {
          console.log('BOARD ' + boards[i].id + ' DOES NOT MATCH ID: ' + this.id);
        }
    }
  }

  createSwimLane(): void {
    this.swimLaneService.createSwimLane(this.newSwimLane);
  }

  openBurnDown() {
    const modalRef2 = this.modalService.open(BurndownchartComponent);
  }

  open(card: Card, slid) {
    const modalRef = this.modalService.open(CardComponent);
    if (!card) {
      card = new Card(0, 0, null, null, null, 0);
    }
    modalRef.componentInstance.title = card.title;
    modalRef.componentInstance.difficulty = card.difficulty;
    modalRef.componentInstance.description = card.description;
    modalRef.componentInstance.id = card.id;
    modalRef.componentInstance.order = card.order;
    modalRef.componentInstance.slid = slid;
  }

  delete(swimlane: SwimLane) {
    console.log('An attempt to delete ' + swimlane.slName + ' has been made');
  }

  getUserBoardRole(boardId) {
    this.currUser = JSON.parse(localStorage.getItem('user'));
    this.permissionService.getPermissions(this.currUser.id, boardId).subscribe(
      data => { this.userBoardRole = data; console.log(this.userBoardRole); },
      err => console.log('Error getting user role')
    );
  }

}
