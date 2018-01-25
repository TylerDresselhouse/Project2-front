import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SwimLane } from '../models/swimlane.model';
import { Observable } from 'rxjs/Observable';
import { Card } from '../models/card.model';
import { Task } from '../models/task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';

const swimLanes = [
    new SwimLane(1, 'Swim Lane 1', [new Card(1, 1, 'title', 'desc', [new Task(1, 'task1', false)])]),
    new SwimLane(2, 'Swim Lane 2', [new Card(2, 10, 'title2', 'desc2',
        [new Task(2, 'task2', true)]), new Card(3, 4, 'title3', 'desc3', [])]),
];

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SwimLaneService {

    private url = 'http://localhost:8080/api/v1/get/boards';
    private newSwimLaneUrl = '';

    constructor(private router: Router, private http: HttpClient) { }

    getSwimLanes(board: number): SwimLane[] {
        return swimLanes;   // CHANGE THIS TO GET THE SWIMLANES OF THE BOARD PARAMETER
    }

    createSwimLane(newSwimLane: SwimLane): Observable<SwimLane> {
        return this.http.post<SwimLane>(this.newSwimLaneUrl, newSwimLane, httpOptions);
    }
}

