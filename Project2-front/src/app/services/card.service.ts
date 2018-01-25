import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
/* import { Board } from '../models/board.model'; */
// import { SwimLane } from '../models/swimlane.model';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/task.model';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SwimLane } from '../models/swimlane.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CardService {

  private url = 'http://localhost:8080/api/v1/createCard/';

  constructor(private router: Router, private http: HttpClient) { }

  // getCards(): Card[] {
  //   return cards;
  // }

  createCard(newCard) {
    console.log(newCard.title + ' ' + newCard.difficulty + ' ' + newCard.description);
    const slid = 1350; // dummy swim lane id
    return this.http.post(this.url + slid, newCard, httpOptions).subscribe(
        success => console.log('Success!'),
        error => console.log('Failure!')
    );
  }

  updateCard() {
    // updateCard
  }

}
