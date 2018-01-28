import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SwimLane } from '../models/swimlane.model';
import { Observable } from 'rxjs/Observable';
import { Card } from '../models/card.model';
import { Task } from '../models/task.model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { AlertService } from './alert.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SwimLaneService {

    id;
    private url = 'http://localhost:8080/api/v1/get/boards';
    private newSwimLaneUrl = '';

    constructor(private router: Router, private http: HttpClient, private alertService: AlertService) { }

    createSwimLane(newSwimLane: SwimLane): Observable<SwimLane> {
        return this.http.post<SwimLane>(this.newSwimLaneUrl, newSwimLane, httpOptions);
    }

    deleteSwimLane(swimLane) {
        const deleteSwimLaneUrl = environment.card.delete();
        return this.http.post(deleteSwimLaneUrl, swimLane, httpOptions).subscribe(
          success => this.alertService.success('Swim Lane deleted successfully!'),
          error => this.alertService.error('Swim Lane failed to delete!')
        );
    }
}

