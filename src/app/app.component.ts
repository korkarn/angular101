import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentName: User = {id:1, name: "Workarn"};

  onResponse(event: User) {
    console.log("On Response in Paraent");
    console.table(event);
  }
}
