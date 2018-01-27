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

    private taskUrl = 'http://localhost:8009/api/v1/get/tasks/';
    private delTask = 'http://localhost:8009/api/v1/delete/task/';
    private creatTaskUrl = 'http://localhost:8009/api/v1/createTask/';
  // this is a service-in-service where the hero service is ue=sing the message service
  constructor(private http: HttpClient) { }


  listOfTasks(): Observable<Task[]> {
    const cId = 1150 // dummy code
    return this.http.get<Task[]>(this.taskUrl + cId);

  }

    addNewTask (task: Task): Observable <Task> {
        return this.http.post<Task>(this.creatTaskUrl , task, httpOptions);
    }

    deleteSpecificTask(): Observable <Task>{
      const tId = 1350;
      return this.http.get<Task>(this.delTask + tId);
    }

  }








