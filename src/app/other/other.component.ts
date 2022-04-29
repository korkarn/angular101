import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  @Input() name : any;
  constructor() { }

  ngOnInit(): void {
  }

}
