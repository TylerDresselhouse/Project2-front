import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { Task } from '../../models/task.model';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CardService],
})
export class CardComponent implements OnInit {

  // cards: Card[] = [
  //   { id: 1, difficulty: 1, title: 'Card 1', description: 'very easy card', tasks: null },
  //   { id: 2, difficulty: 3, title: 'Card 2', description: 'easy card', tasks: null },
  //   { id: 3, difficulty: 6, title: 'Card 3', description: 'kinda hard card', tasks: null },
  //   { id: 4, difficulty: 10, title: 'Card 4', description: 'very hard card', tasks: null },
  // ];

  @Input() card: Card;
  @Input() name;

  constructor(public activeModal: NgbActiveModal, private cardService: CardService) {}


    createCard() {
      this.activeModal.close('Close click');
      this.cardService.createCard(this.card);
    }

    ngOnInit() {
      this.card = new Card(0, 0, null, null, null);
    }


}
