import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card.model';
// import { TaskService } from '../../services/task.service';
import { CardService } from '../../services/card.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CardService]
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  // swimLanes = this.swimLaneService.getSwimLanes();

  /*   lane1 = ['card1', 'card2', 'card3'];
  lane2 = [];
  lane3 = ['card4'];
  lane4 = ['card5', 'card6']; */
  // swimLanes = [this.lane1, this.lane2, this.lane3, this.lane4]; // this is where we would grab all the lanes from the DB

  tasks: Task[] = [];

   constructor(private cardService: CardService) { }


  newTask() {
  //  this.taskSer.createTask(); // add new task
    }

  ngOnInit() {
  }

}
