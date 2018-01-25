import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateComponent } from './components/private/private.component';
import { SwimLanesComponent } from './components/swim-lanes/swim-lanes.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './nav/nav.component';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './components/register/register.component';
import { BoardService } from './services/board.service';
import { SwimLaneService } from './services/swim-lane.service';
import { AuthenticationService } from './services/authentication.service';
import { CardService } from './services/card.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InviteComponent } from './components/invite/invite.component';

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
    InviteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
   ],
  providers: [BoardService, AuthenticationService, CardService, SwimLaneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
