import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn: boolean = !localStorage.getItem('user') === null;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  changeToLoggedIn() {
    this.isLoggedIn = true;
  }

  changeToLoggedOut() {
    this.isLoggedIn = false;
  }

}
