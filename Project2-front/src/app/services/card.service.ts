import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/task.model';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SwimLane } from '../models/swimlane.model';
import { environment } from '../../environments/environment';
import { AlertService } from './alert.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CardService {

  constructor(private router: Router, private http: HttpClient, private alertService: AlertService) { }

  createCard(newCard, slid) {
    const createCardUrl = environment.card.save(slid);
    return this.http.post(createCardUrl, newCard, httpOptions).subscribe(
        success => this.alertService.success('Card saved successfully!'),
        error => this.alertService.error('Card failed to save!')
    );
  }

  deleteCard(cardId) {
    console.log('cardId to delete in cardService: ' + cardId);
    const deleteCardUrl = environment.card.delete(cardId);
    return this.http.post(deleteCardUrl, httpOptions).subscribe(
      success => this.alertService.success('Card deleted successfully!'),
      error => this.alertService.error('Card failed to delete!')
  );
  }

}
