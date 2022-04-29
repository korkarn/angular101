import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';

  datas = [
    {id: 1, name: "worakarn"},
    {id: 2, name: "karn"},
  ];

  dosth(newName: string) {
    console.log(newName)
    this.name = newName;
  }
}
