import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = "https://jsonplaceholder.typicode.com/";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    console.log("Called getAllUsers()");
    return this.http.get(URL + "users");
  }
}
