import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AsbUser } from '../../models/asbuser.model';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
  providers: [ AuthenticationService]
})
export class PrivateComponent implements OnInit {

  public user: String;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.checkCredentials();
    this.user = localStorage.getItem('user');
  }

  logout() {
    this.authService.logout();
  }

}
