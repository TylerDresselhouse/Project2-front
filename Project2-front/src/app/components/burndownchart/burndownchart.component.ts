import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Board } from '../../models/board.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-burndownchart',
  templateUrl: './burndownchart.component.html',
  styleUrls: ['./burndownchart.component.css']
})
export class BurndownchartComponent implements OnInit {
  totalDifficulty: number;
  differenceDifficulty: number;
  lineChart = [];
  xAxis: number[];
  yAxis: number[];
  context: any;
  initialQuestion = true;
  showBurnDown = false;
  moduleAlertMsg: string;
  @Input() weeks = new Array<Bweek>();

  constructor(private elementRef: ElementRef, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.context = this.elementRef.nativeElement.querySelector(`#canvas`);
    this.totalDifficulty = 200;
  }

  openChart(weeks: number) {
    if (weeks > 0 && weeks < 5) {
      this.initialQuestion = false;
      while (weeks > 0) {
        this.weeks.push({ sunday: 0, monday: 0, tuesday: 0, wendesday: 0, thursday: 0, friday: 0, saturday: 0 });
        weeks--;
      }
    } else {
      this.moduleAlertMsg = 'The input must be a number 1-4';
    }

  }

  generateBurnDown() {
    let i = 0;
    while (i < this.weeks.length) {

      i++;
    }
    this.lineChart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: ['dunno1', 'dunno2'],
        datasets: [
          {
            data: [3, 30],
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: [3, 30],
            borderColor: '#ffcc00',
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });
  }
}
