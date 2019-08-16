import { Component, OnInit } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent implements OnInit {

  taskId="";
  title="";
  dueDate="";
  description="";
  priority="";
  assignedTo= "";
  assignedDate="";
  comments= "";
  status="";
  updateditem;

  arr:Task[] = [
    (new Task('1','Surgical','08/13/2019','Surgical request dashboard','High','Kiran','08/10/2019','work with the team','To-Do')),
    (new Task('1','Surgical','08/13/2019','Surgical request dashboard','low','Kiran','08/10/2019','work with the team','To-Do'))

  ];

  inpro:Task[]=[];
  dev:Task[]=[];
  readyforQA:Task[]=[];
  readyforST:Task[]=[];
  Stcomplete:Task[]=[];


  constructor() { }

  ngOnInit() {
  }

  EditItem(i) {
    this.taskId = this.arr[i].taskId ;
    this.title = this.arr[i].title ;
    this.dueDate= this.arr[i].dueDate ;
    this.description = this.arr[i].description ;
    this.priority= this.arr[i].priority ;
    this.assignedTo= this.arr[i].assignedTo ;
    this.assignedDate= this.arr[i].assignedDate ;
    this.comments= this.arr[i].comments ;
    this.status= this.arr[i].status ;
    this.updateditem = i;
  }



  modo(value: string){
    switch(value) {
      case "mod2":
        this.inpro.push(new Task(this.taskId,this.title,this.dueDate,this.description,this.priority,this.assignedTo,this.assignedDate,this.comments,this.status));
        // this.arr.splice(this.arr.indexOf(),1);

        break;
      case "mod3":
        this.dev.push(new Task(this.taskId,this.title,this.dueDate,this.description,this.priority,this.assignedTo,this.assignedDate,this.comments,this.status));
      break;
      case "mod4":
        this.readyforQA.push(new Task(this.taskId,this.title,this.dueDate,this.description,this.priority,this.assignedTo,this.assignedDate,this.comments,this.status));
         break;

         case "mod5":
        this.readyforST.push(new Task(this.taskId,this.title,this.dueDate,this.description,this.priority,this.assignedTo,this.assignedDate,this.comments,this.status));
         break;

         case "mod6":
        this.Stcomplete.push(new Task(this.taskId,this.title,this.dueDate,this.description,this.priority,this.assignedTo,this.assignedDate,this.comments,this.status));
         break;
    }
  }


}
