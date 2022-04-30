import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  constructor() { }

  name = '';

  dosth(newName: string) {
    console.log(newName)
    this.name = newName;
  }

}
