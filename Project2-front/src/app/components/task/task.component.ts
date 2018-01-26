import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

constructor(private taskService: TaskService) { }

@Input() task: Task;

tasks: Task[] = [];

  ngOnInit() {
    this.getTasks();
    this.task = new Task(0, null, false);
    this.task.tDescription = 'Balls';
  }

  getTasks(): void {
    this.taskService.listOfTasks().subscribe(data => { this.tasks = data; });

  }

addTask(tDesc: string): void {
  this.task.tDescription = tDesc  ;
 console.log();
  this.tasks.push(this.task);

  }

}

