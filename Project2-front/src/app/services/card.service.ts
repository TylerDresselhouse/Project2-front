import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
/* import { Board } from '../models/board.model'; */
// import { SwimLane } from '../models/swimlane.model';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/task.model';

@Injectable()
export class CardService {

  private url;

  constructor(private router: Router) { }

  // getCards(): Card[] {
  //   return cards;
  // }

  createCard(Card) {
    console.log(Card.cTitle + ' ' + Card.difficulty + ' ' + Card.cDescription);
  }

  updateCard() {
    // updateCard
  }

}
