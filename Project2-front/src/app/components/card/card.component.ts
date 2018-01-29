import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { Task } from '../../models/task.model';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { parse } from 'url';
import { AlertService } from '../../services/alert.service';
import { TaskService } from '../../services/task.service';
import { TaskComponent } from '../task/task.component';
import { SwimLane } from '../../models/swimlane.model';
import { SwimLanesComponent } from '../swim-lanes/swim-lanes.component';
// import { EventEmitter } from '@angular/core/src/event_emitter';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CardService, AlertService, TaskService],
})

export class CardComponent implements OnInit {

  card: Card;
  // @Output() updateSwimLane = new EventEmitter<Card>();

  constructor(public activeModal: NgbActiveModal, private cardService: CardService, private alertService: AlertService,
    private taskService: TaskService)  { }

  trackByFn(index, task) {
    return task.id;
  }

  createCard() {
    this.card.title = (<HTMLInputElement>document.getElementById('title')).value;
    this.card.difficulty = +(<HTMLInputElement>document.getElementById('difficulty')).value;
    this.card.description = (<HTMLInputElement>document.getElementById('description')).value;
    this.card.id = +(<HTMLInputElement>document.getElementById('id')).value;
    console.log("card: " + this.card.id + ' ' + this.card.description + this.card.difficulty + this.card.title + this.card.tasks);
    this.taskService.listOfTasks(this.card.id).subscribe(data => {
    this.card.tasks = data;
    });
    for (let i = 0; i < document.getElementsByClassName('task').length; i++) {
      this.card.tasks[i] = this.trackByFn(i, this.card.tasks);
    }

    const slid = +(<HTMLInputElement>document.getElementById('slid')).value;
    this.activeModal.close('Close click');
    this.cardService.createCard(this.card, slid).subscribe(
      data => {
        this.card = data;
        this.alertService.success('Card saved successfully!');
      },
      error => this.alertService.error('Card failed to save!'));

      // this.updateSwimLane.emit(this.card);

      // this.swimLanes.updateSwimLane(this.card, slid);
      localStorage.setItem('currCardId', String(this.card.id));
      localStorage.setItem('currCardTitle', String(this.card.title));
      localStorage.setItem('currCardDifficulty', String(this.card.difficulty));
      localStorage.setItem('currCardDescription', String(this.card.description));




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
