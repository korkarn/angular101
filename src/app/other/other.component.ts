import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  @Input() name : any;
  @Output() changeNameEvent = new EventEmitter<any>();

  doSomeChange() {
    console.log("Click!!");
    this.name.age = 30;
    this.changeNameEvent.emit(this.name);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
