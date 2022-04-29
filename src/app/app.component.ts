import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentName = new User(1, "Worakarn");

  onResponse(event: User) {
    console.log("On Response in Paraent");
    console.table(event);
  }
}
