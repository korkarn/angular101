import { Component, OnInit } from '@angular/core';
import { Task } from '../models/user';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  constructor() { }

  sTodo = '';
  todoLen = 0;
  todoAc = 0;
  arrTodo = [] as Task[];
  pTodo = "Todo today";

  addTodo(txt: string) {
    if (txt) {
      var obj = new Task(txt,true);
      this.arrTodo.push(obj);
      this.todoLen = this.arrTodo.length;
      this.calTodoAc();
      this.sTodo = '';
    }
  }

  updTodo(t: Task) {
    if (t.active) {
      t.active = false;
    } else {
      t.active = true;
    }
    this.calTodoAc();
  }

  calTodoAc() {
    this.todoAc = 0;
    for(let i=0; i<this.arrTodo.length; i++) {
      if(this.arrTodo[i].active) {
        this.todoAc++;
      }
    }
  }

}
