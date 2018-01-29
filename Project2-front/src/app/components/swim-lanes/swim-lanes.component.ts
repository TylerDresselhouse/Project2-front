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
import { TaskComponent } from '../task/task.component';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-swim-lanes',
  templateUrl: './swim-lanes.component.html',
  styleUrls: ['./swim-lanes.component.css'],
  providers: [NgbModal, CardComponent, TaskComponent, CardService],
})
export class SwimLanesComponent implements OnInit {

  swimLanes: SwimLane[];
  newSwimLane: SwimLane;
  card: Card;
  cardService: CardService;
  swimLane: SwimLane;
  taskComponent: TaskComponent;
  id;
  selectedSwimlane: SwimLane;

  constructor(private swimLaneService: SwimLaneService,
    private authService: AuthenticationService, private route: ActivatedRoute, private modalService: NgbModal,
    private cardComponent: CardComponent, private navService: NavbarService ) { }

  ngOnInit() {
    this.authService.checkCredentials();
    this.id = this.route.snapshot.paramMap.get('id');
    localStorage.setItem('currBoardId', this.id);
    this.swimLanes = this.getSwimLanes(0);
    this.navService.showBoardMembers();
    this.navService.showBurndown();
  }

  getSwimLanes(lane: number): SwimLane[] {
    // this.id = JSON.parse(localStorage.getItem('id'));
    // return swimLanes;   // CHANGE THIS TO GET THE SWIMLANES OF THE BOARD PARAMETER
    const boards: Board[] = JSON.parse(localStorage.getItem('boards'));
    console.log(boards);
    for (let i = 0; i < boards.length; i++) {
        if (boards[i].id == this.id) {
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
    const cardId = card.id;
    localStorage.setItem('currCardId', String(cardId));

  }

  delete(sid: number) {
    console.log('An attempt to delete ' + sid + ' has been made');
    this.swimLane.id = sid;
    this.swimLaneService.deleteSwimLane(this.swimLane);
  }

  updateSwimLane(card, slid) {
    console.log("AAAAAAAAAHHHHHHHHHHHH");
    for (let i = 0; i < this.swimLanes.length; i++) {
      if (this.swimLanes[i].id === slid) {
          for (let j = 0; j < this.swimLanes[i].cards.length; j++) {
            if (this.swimLanes[i].cards[j].id === card.id) {
                this.swimLanes[i].cards[j] = card;
            }
          }
      }
    }
  }

}
