import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService]
})
export class TaskComponent implements OnInit {

constructor(private taskService: TaskService) { }

@Input() task: Task;

tasks: Task[] = [];

  ngOnInit() {
    this.getTasks();
    this.task = new Task(0, null, false);
  }

  getTasks(): void {
    this.taskService.listOfTasks().subscribe(data => { this.tasks = data; });

  }

addTask(tDesc: string): void {
  this.task.description = tDesc;
 console.log(this.task);
 this.taskService.addNewTask(this.task);
  this.tasks.push(this.task);
this.task = new Task(0, null, null);

  }

  deleteTask(): void {
    this.taskService.deleteSpecificTask();
  }

}

