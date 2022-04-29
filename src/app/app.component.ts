import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentName = {id: 1, name: "worakarn"};

  onResponse(event: any) {
    console.log("On Response in Paraent");
    console.table(event);
  }
}
