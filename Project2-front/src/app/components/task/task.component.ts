import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { AlertService } from '../../services/alert.service';
import { CardComponent } from '../card/card.component';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { PermissionsService } from '../../services/permissions.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService, CardComponent, CardService]
})
export class TaskComponent implements OnInit {

constructor(private taskService: TaskService, private alertService: AlertService,
  public permissionsService: PermissionsService) { }

  @Input() task: Task;

  cardService: CardService;
  tasks: Task[] = [];

  ngOnInit() {
    this.tasks = new Array<Task>();
    const cId = +localStorage.getItem('currCardId');
    console.log('ngOnInit received cId:' + cId);
  this.getTasks(cId);

    this.task = new Task(0, null, false);
  }

  getTasks( cId): void {
    console.log('received card id in getTasks: ' + cId);
    this.taskService.listOfTasks(cId).subscribe(data => { 
      this.tasks = data; 
      console.log(data);
     }
    );

  }

  addTask(tDesc: string): void {
    // this.task.description = tDesc;
    console.log(this.task);
    this.task = new Task(0, tDesc, false);
    const cId = +(<HTMLInputElement>document.getElementById('id')).value;
    console.log('cId from hidden html: ' + cId);
    this.taskService.addNewTask(this.task, cId).subscribe(
      data => {
        this.task = data;
        console.log(data);
        if(this.tasks !== null){
          this.tasks.push(data);
        } else {
          this.tasks = [data];
        }
       
        this.alertService.success('Task was successfully added!');
      }
    );
  }

  deleteTask(task: Task): void {
    const cId = +(<HTMLInputElement>document.getElementById('id')).value;
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskService.deleteSpecificTask(task, cId).subscribe(
      data => {
        console.log(data);
        this.task = data;
        this.alertService.success('Task was successfully Deleted!');
      }
    );

  }


  checkedOffTask(e): void{
   
    if(e.target.checked){
        this.task.completed = true;
    }else  {
        this.task.completed = false;
    }
      console.log(this.task.completed)
      console.log(this.task);
      this.taskService.completedTask(this.task).subscribe(
        data => {
          this.task = data;
          this.alertService.success('Task is completed!');
      
    }
  );
  }
    }

        
       
   
  
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
 



// 