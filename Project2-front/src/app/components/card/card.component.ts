import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { Task } from '../../models/task.model';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { parse } from 'url';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CardService],
})

export class CardComponent implements OnInit {

  card: Card;

  constructor(public activeModal: NgbActiveModal, private cardService: CardService) {}

    createCard() {
      this.card.title = (<HTMLInputElement>document.getElementById('title')).value;
      this.card.difficulty = +(<HTMLInputElement>document.getElementById('difficulty')).value;
      this.card.description = (<HTMLInputElement>document.getElementById('description')).value;
      this.card.id = +(<HTMLInputElement>document.getElementById('id')).value;
      const slid = +(<HTMLInputElement>document.getElementById('slid')).value;
      this.activeModal.close('Close click');
      console.log('card id in card component: ' + this.card.id);
      console.log('slid in card component: ' + slid);
      this.cardService.createCard(this.card, slid);
    }

    deleteCard() {
      const cardId = +(<HTMLInputElement>document.getElementById('id')).value;
      this.activeModal.close('Close click');
      this.cardService.deleteCard(cardId);
    }

    ngOnInit() {
      this.card = new Card(0, 0, null, null, null);
    }

}
