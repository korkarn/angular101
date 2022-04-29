import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: Router, private userService: UserService) { }

  gotoMain() {
    this.route.navigate(['/']);
  }

  results: any

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: data => {
        console.log(data);
        this.results = data;
      },
      error: err => {
        console.log(err);
      }
    });
    
  }

}
