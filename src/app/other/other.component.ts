import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  @Input() name!: User;
  @Output() changeNameEvent = new EventEmitter<User>();

  doSomeChange() {
    console.log("Click!!");
    this.name.age = 30;
    this.changeNameEvent.emit(this.name);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
