import { Component, OnInit, Input, Output } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { Task } from '../../models/task.model';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { parse } from 'url';
import { AlertService } from '../../services/alert.service';
import { PermissionsService } from '../../services/permissions.service';
import { TaskService } from '../../services/task.service';
import { TaskComponent } from '../task/task.component';
import { SwimLane } from '../../models/swimlane.model';
import { SwimLanesComponent } from '../swim-lanes/swim-lanes.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CardService, AlertService, TaskService],
})

export class CardComponent implements OnInit {

  card: Card;
  swimLanes: SwimLanesComponent;

  constructor(public activeModal: NgbActiveModal, private cardService: CardService, private alertService: AlertService,
    private taskService: TaskService, private permissionsService: PermissionsService) { }

  // trackByFn(index, task) {
  //   return task;
  // }

  createCard() {
    this.card.title = (<HTMLInputElement>document.getElementById('title')).value;
    this.card.difficulty = +(<HTMLInputElement>document.getElementById('difficulty')).value;
    this.card.description = (<HTMLInputElement>document.getElementById('description')).value;
    this.card.id = +(<HTMLInputElement>document.getElementById('id')).value;
    const slid = +(<HTMLInputElement>document.getElementById('slid')).value;
    if (this.card.title.length !== 0 && this.card.difficulty !== 0) {
      this.cardService.createCard(this.card, slid).subscribe(
        data => {
          this.card = data;
          this.alertService.success('Card saved successfully!');
        },
        error => this.alertService.error('Card failed to save!'));

      // for (let i = 0; i < document.getElementsByClassName('task').length; i++) {
      //   this.card.tasks[i] = this.trackByFn(i, this.card.tasks);
      //   console.log('Tasks in card component: ' + this.card.tasks[i]);
      // }
      this.activeModal.close(this.card);
    } else if (this.card.title.length === 0 && this.card.difficulty !== 0) {
      this.alertService.error('This card needs a title!');
    } else if (this.card.title.length !== 0 && this.card.difficulty === 0) {
      this.alertService.error('This card needs a difficulty level!');
    } else if (this.card.title.length === 0 && this.card.difficulty === 0) {
      this.alertService.error('This card needs a title and a difficulty level!');
    } else {
      this.alertService.error('I\'m a teapot!');
    }
  }

    deleteCard() {
      this.card.id = +(<HTMLInputElement>document.getElementById('id')).value;
      const slid = +(<HTMLInputElement>document.getElementById('slid')).value;
      this.activeModal.close(this.card);
      this.cardService.deleteCard(this.card);
    }

    ngOnInit() {
      this.card = new Card(0, 0, null, null, null, 0);
    }

  }
