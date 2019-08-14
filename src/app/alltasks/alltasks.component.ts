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
    (new Task('1','Surgical','08/13/2019','Surgical request dashboard','High','Kiran','08/10/2019','work with the team','To-Do'))

  ];


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

  UpdateItem() {

    let data = this.updateditem;
    for (let i = 0; i < this.arr.length; i++) {
      // tslint:disable-next-line: triple-equals
      if ( i == data ) {
        this.arr[i].taskId = this.taskId ;

        this.arr[i].title = this.title ;
        this.arr[i].dueDate = this.dueDate;
        this.arr[i].description = this.description;
        this.arr[i].priority = this.priority;
        this.arr[i].assignedTo = this.assignedTo;
        this.arr[i].assignedDate = this.assignedDate;
        this.arr[i].comments = this.comments;
        this.arr[i].status = this.status;

        this.taskId = '';
        this.title = '';
        this.dueDate = '';
        this.description = '';
        this.priority = '';
        this.assignedTo = '';
        this.assignedDate = '';
        this.comments = '';
        this.status = '';
      }
    }

  }

}
