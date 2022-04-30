import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { XyzPipe } from './xyz.pipe';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AssignmentComponent } from './assignment/assignment.component';


@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    XyzPipe,
    UserComponent,
    LoginComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
