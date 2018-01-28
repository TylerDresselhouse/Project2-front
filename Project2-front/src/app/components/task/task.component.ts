import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { AlertService } from '../../services/alert.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService]
})
export class TaskComponent implements OnInit {

constructor(private taskService: TaskService,
  private alertService: AlertService) { }

@Input() task: Task;

tasks: Task[] = [];

  ngOnInit() {
    this.getTasks();
    
    this.task = new Task(0, null, false);
  }

  getTasks(): void {
    this.taskService.listOfTasks().subscribe(data => { this.tasks = data; console.log(data); });
    
  }

addTask(tDesc: string): void {
  // this.task.description = tDesc;
 console.log(this.task);
 this.task = new Task(0, tDesc,false);
 this.taskService.addNewTask(this.task).subscribe(
  data => {
    this.task = data;
    console.log(data);
    this.tasks.push(this.task)
    this.alertService.success('Task was successfully added!');
  }
);
}

  deleteTask(task: Task ): void {
this.tasks = this.tasks.filter(t => t !== task);
    this.taskService.deleteSpecificTask(this.task).subscribe();

  //   for(let i = 0 ; i< this.tasks.length; i++){
  //     if( tid = this.tasks[i].id  ){
  //       this.task.id = tid;
  //       console.log(tid);
  //       this.tasks[i] = this.task;
  //       console.log(this.task);

  //       break;
  //     }
      
  //   }
  //   this.taskService.deleteSpecificTask(this.task).subscribe(
  //     data => {
  //       console.log(this.task);
        
  //         this.tasks.splice(tid,1);
         
  //       this.task = data;
  //       console.log(this.task);
  //       this.alertService.success('Task was successfully deleted!');
  //     },
  //     err => {
  //         this.alertService.error('Error: ' + err);
  //       }

  //     // () => {
  //     //   for(let i = 0 ; i< this.tasks.length; i++){
  //     //     this.tasks[i].id = this.task.id ;
  //     //     this.tasks.splice(i,1);
  //     //     break;
  //     //   }
  //     // }
      
  //   );
  }

}

// 