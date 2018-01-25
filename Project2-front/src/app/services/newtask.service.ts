import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../models/Card.model';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class NewtaskService {

  url = `http://localhost:8080/api/v1/`; // append getTasks end point


  public newTask() {
    // send task description and card id
  }

  constructor(private router: Router, private http: Http) { }


  // getAllTasks(): Observable<Task[]> {
  //   return this.http
  //       .get(this.url)
  //       // must import Response datatype
  //       .map( (response: Response) => {
  //         return <Task[]> response.json();
  //       });
  // }

}
