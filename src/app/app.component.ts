import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'user';

  dosth(event: Event) {
    let val = (event.target as HTMLInputElement).value;
    console.log(val)
    this.name = val;
  }
}
