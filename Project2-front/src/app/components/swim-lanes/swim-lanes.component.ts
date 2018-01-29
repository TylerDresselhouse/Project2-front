import { Component, OnInit, Input } from '@angular/core';
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
import { AlertService } from '../../services/alert.service';

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
  id: number;

  constructor(private swimLaneService: SwimLaneService,
    private authService: AuthenticationService, private route: ActivatedRoute, private modalService: NgbModal,
    private cardComponent: CardComponent, private navService: NavbarService, private alertService: AlertService ) { }

    @Input() swimLaneIn: SwimLane;

  ngOnInit() {
    this.authService.checkCredentials();
    this.id = JSON.parse(this.route.snapshot.paramMap.get('id'));
    localStorage.setItem('currBoardId', JSON.stringify(this.id));
    this.swimLanes = this.getSwimLanes(0);
    this.newSwimLane = new SwimLane(null, null, null);
    this.navService.showBoardMembers();
    this.navService.showBurndown();
  }

  getSwimLanes(lane: number): SwimLane[] {
    // this.id = JSON.parse(localStorage.getItem('id'));
    // return swimLanes;   // CHANGE THIS TO GET THE SWIMLANES OF THE BOARD PARAMETER
    const boards: Board[] = JSON.parse(localStorage.getItem('boards'));
    console.log(boards);
    for (let i = 0; i < boards.length; i++) {
        if (boards[i].id === this.id) {
          console.log('SUCCESS ON ' + boards[i].id);
            return boards[i].swimLanes;
        } else {
          console.log('BOARD ' + boards[i].id + ' DOES NOT MATCH ID: ' + this.id);
        }
    }
  }

  createSwimLane(): void {
    const newLane = new SwimLane(null, this.newSwimLane.name, []);
    this.swimLaneService.createSwimLane(newLane, this.id).subscribe(
      data => {
        this.swimLaneIn = data;
        this.swimLanes.push(this.swimLaneIn);
        this.alertService.success('Swim Lane successfully added!');
      }
    );
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

  delete(swimLane: SwimLane): void {
    console.log('An attempt to delete ' + JSON.stringify(swimLane) + ' has been made');
    this.swimLanes = this.swimLanes.filter(s => s !== swimLane);
    this.swimLaneService.deleteSwimLane(swimLane, this.id).subscribe(
      data => {
        this.swimLaneIn = data;
        this.alertService.success('Swim Lane successfully deleted!');
      }
    );
  }

}
