import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { Task } from '../../models/task.model';

import { ModalComponent } from '../../modal/modal.component';
import { ModalService } from '../../services/modal.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CardService], // AngularBasicModalModule, ModalComponent
  moduleId: module.id,
})
export class CardComponent implements OnInit {

  cards: Card[] = [
    { id: 1, difficulty: 1, title: 'Card 1',  description: 'very easy card', tasks: null },
    { id: 2, difficulty: 3, title: 'Card 2',  description: 'easy card', tasks: null },
    { id: 3, difficulty: 6, title: 'Card 3',  description: 'kinda hard card', tasks: null },
    { id: 4, difficulty: 10, title: 'Card 4',  description: 'very hard card', tasks: null },
  ];

  private bodyText: string;
  @Input() card: Card;

  constructor(private cardService: CardService, private modalService: ModalService) { } // private modal: ModalComponent

  createCard() {
    this.cardService.createCard(this.card);
    }

  ngOnInit() {
    this.card = new Card(0, 0, null, null, null);
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}

}
