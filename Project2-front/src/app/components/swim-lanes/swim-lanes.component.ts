import { Component, OnInit } from '@angular/core';
import { SwimLaneService } from '../../services/swim-lane.service';
import { AuthenticationService } from '../../services/authentication.service';
import { SwimLane } from '../../models/swimlane.model';
import { CardComponent } from '../card/card.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';


@Component({
  selector: 'app-swim-lanes',
  templateUrl: './swim-lanes.component.html',
  styleUrls: ['./swim-lanes.component.css'],
  providers: [NgbModal],
})
export class SwimLanesComponent implements OnInit {

  swimLanes = this.swimLaneService.getSwimLanes(0);
  newSwimLane: SwimLane;

  constructor(private swimLaneService: SwimLaneService, private authService: AuthenticationService, private modalService: NgbModal) { }

  ngOnInit() {
    this.authService.checkCredentials();
    this.getSwimLanes(0);
  }

  getSwimLanes(lane: number): void {
     this.swimLaneService.getSwimLanes(lane);
/*    .subscribe((daswimlanes: SwimLane[]) => {
      this.swimLanes = daswimlanes;
      console.log(this.swimLanes);
    }); */
  }

  createSwimLane(): void {
    this.swimLaneService.createSwimLane(this.newSwimLane);
  }

  open() {
    const modalRef = this.modalService.open(CardComponent);
//    modalRef.componentInstance.title = this.user = JSON.parse(localStorage.getItem('user'));

    modalRef.componentInstance.difficulty = 8;
    modalRef.componentInstance.description = 'desc';

  }

}
