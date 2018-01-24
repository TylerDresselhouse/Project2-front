import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
/* import { Board } from '../models/board.model'; */
import { SwimLane } from '../models/swimlane.model';
import { Observable } from 'rxjs/Observable';
import { Card } from '../models/card.model';
import { Task } from '../models/task.model';

const swimLanes = [
  new SwimLane(1, 'Swim Lane 1', [new Card(1, 1, 'title', 'desc', [new Task(1, 'task1', false)])]),
  new SwimLane(2, 'Swim Lane 2', [new Card(2, 10, 'title2', 'desc2',
   [new Task(2, 'task2', true)]), new Card(3, 4, 'title3', 'desc3', [])]),
];

@Injectable()
export class SwimLaneService {

    private url;

    constructor(private router: Router) { }

    getSwimLanes(): SwimLane[] {
        return swimLanes;
    }
}

