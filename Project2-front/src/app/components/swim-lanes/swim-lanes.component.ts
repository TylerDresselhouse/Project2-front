import { Component, OnInit } from '@angular/core';
import { SwimLaneService } from '../../services/swim-lane.service';

@Component({
  selector: 'app-swim-lanes',
  templateUrl: './swim-lanes.component.html',
  styleUrls: ['./swim-lanes.component.css']
})
export class SwimLanesComponent implements OnInit {

  swimLanes = this.swimLaneService.getSwimLanes();

/*   lane1 = ['card1', 'card2', 'card3'];
  lane2 = [];
  lane3 = ['card4'];
  lane4 = ['card5', 'card6']; */
  // swimLanes = [this.lane1, this.lane2, this.lane3, this.lane4]; // this is where we would grab all the lanes from the DB

  constructor(private swimLaneService: SwimLaneService) { }

  ngOnInit() {
  }

}
