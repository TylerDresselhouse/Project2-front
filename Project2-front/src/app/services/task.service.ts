import { Injectable } from '@angular/core';
import {Task} from '../models/task.model';

import { environment } from '../../environments/environment';
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

  // this is a service-in-service where the hero service is ue=sing the message service
  constructor(private http: HttpClient) { }


  listOfTasks(cId) {
    return this.http.get<Task[]>(environment.task.get(cId)).map(
      data => {
        return data;
        }
      );
  }

    addNewTask (task: Task, cId): Observable <Task> {
        return this.http.post<Task>(environment.task.create(cId), task, httpOptions).map(
          data => {
            return data;
        },
        err => console.log('error caught:' + err));
    }

    deleteSpecificTask(task: Task, cId): Observable <Task> {
      console.log(task);
      return this.http.post<Task>(environment.task.delete(cId), task, httpOptions ).map(
        data => {
          return data;
      },
      err => console.log('error caught:' + err));

    }

    completedTask( task: Task):  Observable <Task> {
      console.log(task);
      return this.http.post<Task>(environment.task.check(), task, httpOptions ).map(

        data => {
          return data;
      },
      err => console.log('error caught:' + err));

    }

  }








