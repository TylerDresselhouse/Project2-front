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
  xAxis = [];
  yAxis = [];
  context: any;
  initialQuestion = true;
  showBurnDown = false;
  moduleAlertMsg: string;
  @Input() weeks = new Array<Bweek>();

  constructor(private elementRef: ElementRef, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.context = this.elementRef.nativeElement.querySelector(`#canvas`);
    this.totalDifficulty = 100;
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
    this.showBurnDown = true;
    this.differenceDifficulty = this.totalDifficulty;
    this.weeks.forEach(week => {
      this.differenceDifficulty = this.differenceDifficulty - week.sunday;
      this.xAxis.push('Sun');
      this.yAxis.push(this.differenceDifficulty);
      this.differenceDifficulty = this.differenceDifficulty -  week.monday;
      this.xAxis.push('Mon');
      this.yAxis.push(this.differenceDifficulty);
      this.differenceDifficulty = this.differenceDifficulty -  week.tuesday;
      this.xAxis.push('Tues');
      this.yAxis.push(this.differenceDifficulty);
      this.differenceDifficulty = this.differenceDifficulty -  week.wendesday;
      this.xAxis.push('Wend');
      this.yAxis.push(this.differenceDifficulty);
      this.differenceDifficulty = this.differenceDifficulty -  week.thursday;
      this.xAxis.push('Thurs');
      this.yAxis.push(this.differenceDifficulty);
      this.differenceDifficulty = this.differenceDifficulty -  week.friday;
      this.xAxis.push('Fri');
      this.yAxis.push(this.differenceDifficulty);
      this.differenceDifficulty = this.differenceDifficulty -  week.saturday;
      this.xAxis.push('Sat');
      this.yAxis.push(this.differenceDifficulty);
    });
    this.lineChart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: this.xAxis,
        datasets: [
          {
            data: this.xAxis,
            borderColor: '#5b9bd5',
            fill: false
          },
          {
            data: this.yAxis,
            borderColor: '#5b9bd5',
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
