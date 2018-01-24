import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateComponent } from './components/private/private.component';
import { SwimLanesComponent } from './components/swim-lanes/swim-lanes.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './nav/nav.component';

// Services
import { BoardService } from './services/board.service';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrivateComponent,
    SwimLanesComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BoardService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
