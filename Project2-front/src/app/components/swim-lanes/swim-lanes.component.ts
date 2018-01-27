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

@Component({
  selector: 'app-swim-lanes',
  templateUrl: './swim-lanes.component.html',
  styleUrls: ['./swim-lanes.component.css'],
  providers: [NgbModal],
})
export class SwimLanesComponent implements OnInit {

  swimLanes: SwimLane[];
  newSwimLane: SwimLane;
  card: Card;
  id;

  constructor(private swimLaneService: SwimLaneService,
    private authService: AuthenticationService, private route: ActivatedRoute, private modalService: NgbModal ) { }

  ngOnInit() {
    this.authService.checkCredentials();
    this.id = this.route.snapshot.paramMap.get('id');
    this.swimLanes = this.getSwimLanes(0);
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

  open() {
    const modalRef = this.modalService.open(CardComponent);
    this.card = JSON.parse(localStorage.getItem('user'));
   // modalRef.componentInstance.title = this.user = 
    modalRef.componentInstance.difficulty = 8;
    modalRef.componentInstance.description = 'desc';

  }



}
