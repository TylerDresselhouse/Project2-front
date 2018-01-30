import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { Task } from '../../models/task.model';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { parse } from 'url';
import { AlertService } from '../../services/alert.service';
import { PermissionsService } from '../../services/permissions.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CardService, AlertService],
})

export class CardComponent implements OnInit {

  card: Card;
  alertService: AlertService;

  constructor(public activeModal: NgbActiveModal, private cardService: CardService,
    private permissionsService: PermissionsService) {}

    createCard() {
      this.card.title = (<HTMLInputElement>document.getElementById('title')).value;
      this.card.difficulty = +(<HTMLInputElement>document.getElementById('difficulty')).value;
      this.card.description = (<HTMLInputElement>document.getElementById('description')).value;
      this.card.id = +(<HTMLInputElement>document.getElementById('id')).value;
      const slid = +(<HTMLInputElement>document.getElementById('slid')).value;
      this.activeModal.close('Close click');
      console.log('card id in card component: ' + this.card.id);
      console.log('slid in card component: ' + slid);
      this.cardService.createCard(this.card, slid).subscribe(
        data => {
          this.card = data;
          this.alertService.success('Card saved successfully!');
        },
        error => this.alertService.error('Card failed to save!'));
    }

    deleteCard() {
      this.card.id = +(<HTMLInputElement>document.getElementById('id')).value;
      const slid = +(<HTMLInputElement>document.getElementById('slid')).value;
      this.activeModal.close('Close click');
      this.cardService.deleteCard(this.card);
    }

    ngOnInit() {
      this.card = new Card(0, 0, null, null, null, 0);
    }

}
