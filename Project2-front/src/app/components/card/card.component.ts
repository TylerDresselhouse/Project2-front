import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card.model';
// import { TaskService } from '../../services/task.service';
import { CardService } from '../../services/card.service';
import { Task } from '../../models/task.model';

import { AngularBasicModalModule, BaseModalConfig, BasicModalService, BaseModal } from 'angular-basic-modal';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CardService, AngularBasicModalModule]
})
export class CardComponent implements OnInit {

  cards: Card[] = [
    { id: 1, difficulty: 1, title: 'Card 1',  description: 'very easy card', tasks: null },
    { id: 2, difficulty: 3, title: 'Card 2',  description: 'easy card', tasks: null },
    { id: 3, difficulty: 6, title: 'Card 3',  description: 'kinda hard card', tasks: null },
    { id: 4, difficulty: 10, title: 'Card 4',  description: 'very hard card', tasks: null },
  ];

  @Input() card: Card;
 // bmc = new BaseModalConfig;

  constructor(private cardService: CardService) { }// , private modal: BasicModalService) { }

  createCard() {
    this.cardService.createCard(this.card);
    }

  ngOnInit() {
    this.card = new Card(0, 0, null, null, null);

    // this.bmc.title = 'Hi There!';
    // this.bmc.message = 'This is Eddie, your shipboard computer';
    // this.bmc.width = 400;
    // this.bmc.height = 160;
    // this.bmc.cancelBtn = 'Great!';

    // setTimeout( () => {
    //   this.modal.show(this.bmc, BaseModal).then( res => {
    //     console.log(res);
    //   });
    // }, 1500);
  }

}
