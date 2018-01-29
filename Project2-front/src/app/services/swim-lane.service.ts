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


    createSwimLane(newSwimLane, id): Observable<SwimLane> {
        this.newSwimLaneUrl = environment.swimLane.create(id);
        return this.http.post<SwimLane>(this.newSwimLaneUrl, newSwimLane, httpOptions).map(
            data => {
                return data;
            },
            err => console.log('error caught:' + err));

    deleteSwimLane(swimLane: SwimLane, id: number): Observable<SwimLane> {
        console.log('Attempting to delete swim lane');
        const deleteSwimLaneUrl = environment.swimLane.delete(id);
        return this.http.post<SwimLane>(deleteSwimLaneUrl, swimLane, httpOptions).map(
            data => {
                return data;
            },
            err => console.log('error caught:' + err));

          // success => this.alertService.success('Swim Lane deleted successfully!'),
          // error => this.alertService.error('Swim Lane failed to delete!')
    }
}

