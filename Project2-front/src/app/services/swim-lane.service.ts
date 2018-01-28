import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SwimLane } from '../models/swimlane.model';
import { Observable } from 'rxjs/Observable';
import { Card } from '../models/card.model';
import { Task } from '../models/task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SwimLaneService {

    id;
    private url = 'http://localhost:8080/api/v1/get/boards';
    private newSwimLaneUrl = '';

    constructor(private router: Router, private http: HttpClient) { }

    // getSwimLanes(board: number): SwimLane[] {
    //     this.id = JSON.parse(localStorage.getItem('id'));
    //     console.log(this.id);
    //     // return swimLanes;   // CHANGE THIS TO GET THE SWIMLANES OF THE BOARD PARAMETER
    //     const boards: any[] = JSON.parse(localStorage.getItem('boards'));
    //     console.log(boards);
    //     for (let i = 0; i < boards.length; i++) {
    //         if (boards[i] === this.id) {
    //             return boards[i];
    //         }
    //     }
    // }

    createSwimLane(newSwimLane: SwimLane): Observable<SwimLane> {
        return this.http.post<SwimLane>(this.newSwimLaneUrl, newSwimLane, httpOptions);
    }
}

