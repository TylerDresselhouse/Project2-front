import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
/* import { Board } from '../models/board.model'; */
// import { SwimLane } from '../models/swimlane.model';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/task.model';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SwimLane } from '../models/swimlane.model';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CardService {

  constructor(private router: Router, private http: HttpClient) { }

  // getCards(): Card[] {
  //   return cards;
  // }

  createCard(newCard) {
    const slid = 1350; // dummy swim lane id
    const createCardUrl = environment.card.save(slid);
    console.log(newCard.title + ' ' + newCard.difficulty + ' ' + newCard.description);
    return this.http.post(createCardUrl, newCard, httpOptions).subscribe(
        success => console.log('Success!'),
        error => console.log('Failure!')
    );
  }

  updateCard() {
    // updateCard
  }

}
