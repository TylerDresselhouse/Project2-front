import { Injectable } from '@angular/core';
import {Task} from '../models/task.model';


import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


// To enable a non-blocking method we must use a return type of promise or observable
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
// (We made a service)This service is the dependency injection systconst httpOptions = {

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class TaskService {
    private taskUrl = 'api/tasks';
  // this is a service-in-service where the hero service is ue=sing the message service
  constructor(private http: HttpClient) { }


  listOfTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl, httpOptions);
  }


    addTask (task: Task): Observable <Task> {
        return this.http.post<Task>(this.taskUrl, task, httpOptions);
    }

  }








