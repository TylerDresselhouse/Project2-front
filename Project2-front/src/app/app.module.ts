import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
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
import { NavbarService } from './services/navbar.service';
import { NgbModal, NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BurndownchartComponent } from './components/burndownchart/burndownchart.component';
import { BoardMembersComponent } from './components/board-members/board-members.component';
import { TaskService } from './services/task.service';
import { PermissionsService } from './services/permissions.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SwimLanesComponent,
    BurndownchartComponent,
    CardComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    InviteComponent,
    BoardMembersComponent,
    TaskComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
   ],

  providers: [
    BoardService,
    AuthenticationService,
    CardService,
    SwimLaneService,
    AlertService,
    InviteService,
    NavbarService,
    NgbActiveModal,
    TaskComponent,
    TaskService,
    PermissionsService],

  entryComponents: [
    CardComponent,
    BurndownchartComponent,
    BoardMembersComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
