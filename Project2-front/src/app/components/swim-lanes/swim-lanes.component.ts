import { Component, OnInit } from '@angular/core';
import { SwimLaneService } from '../../services/swim-lane.service';
import { AuthenticationService } from '../../services/authentication.service';
import { SwimLane } from '../../models/swimlane.model';

@Component({
  selector: 'app-swim-lanes',
  templateUrl: './swim-lanes.component.html',
  styleUrls: ['./swim-lanes.component.css']
})
export class SwimLanesComponent implements OnInit {

  swimLanes = this.swimLaneService.getSwimLanes(0);
  newSwimLane: SwimLane;

  constructor(private swimLaneService: SwimLaneService, private authService: AuthenticationService) { }

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

}
