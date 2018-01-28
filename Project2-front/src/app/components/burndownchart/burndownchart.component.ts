import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartDays } from '../../models/chartdays.model';
import { Board } from '../../models/board.model';

@Component({
  selector: 'app-burndownchart',
  templateUrl: './burndownchart.component.html',
  styleUrls: ['./burndownchart.component.css']
})
export class BurndownchartComponent implements OnInit {
  initialQuestion = true;
  // days = [0, 0, 0, 0, 0, 0, 0];
  @Input() weeks = new Array<Bweek>();
  // weeks = { "week": []};


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }

  openChart(weeks: number) {
    if (weeks > 0 && weeks < 4) {
      this.initialQuestion = false;
      while (weeks > 0) {
        this.weeks.push({sunday: 0, monday: 0, tuesday: 0, wendesday: 0, thursday: 0, friday: 0, saturday: 0});
        weeks--;
      }
      console.log('Test to retrieve element: ' + this.weeks[1].monday);
    } else {

    }

  }

  generateBurnDown() {
    console.log(this.weeks[0]);
    console.log(this.weeks[1]);
  }

}
