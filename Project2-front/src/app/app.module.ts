import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateComponent } from './components/private/private.component';
import { SwimLanesComponent } from './components/swim-lanes/swim-lanes.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './components/alert/alert.component';

// Services
import { BoardService } from './services/board.service';
import { SwimLaneService } from './services/swim-lane.service';
import { AuthenticationService } from './services/authentication.service';
import { CardService } from './services/card.service';
import { InviteComponent } from './components/invite/invite.component';
import { InviteService } from './services/invite.service';
import { AlertService } from './services/alert.service';
import { TaskComponent } from './components/task/task.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { NavbarService } from './services/navbar.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrivateComponent,
    SwimLanesComponent,
    CardComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    InviteComponent,
    TaskComponent,
    AlertComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatInputModule
   ],
 
  providers: [BoardService,TaskComponent, AuthenticationService, CardService, SwimLaneService, AlertService, InviteService,NavbarService],

  bootstrap: [AppComponent]
})
export class AppModule { }
