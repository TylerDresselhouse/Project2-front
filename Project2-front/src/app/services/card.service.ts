import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/task.model';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SwimLane } from '../models/swimlane.model';
import { environment } from '../../environments/environment';
import { AlertService } from './alert.service';
import { Card } from '../models/card.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CardService {

  constructor(private router: Router, private http: HttpClient, private alertService: AlertService) { }

  createCard(newCard: Card, slid) {
    const createCardUrl = environment.card.save(slid);
    return this.http.post<Card>(createCardUrl, newCard, httpOptions).map(
        data => {
          return data;
        }
    );
  }

  updateCard(card: Card, slid) {
    const updateCardUrl = environment.card.save(slid);
    return this.http.post<Card>(updateCardUrl, card, httpOptions).map(
        data => {
          return data;
        }
    );
  }

  deleteCard(card) {
    const deleteCardUrl = environment.card.delete();
    return this.http.post(deleteCardUrl, card, httpOptions).subscribe(
      success => this.alertService.success('Card deleted successfully!'),
      error => this.alertService.error('Card failed to delete!')
  );
  }

}
