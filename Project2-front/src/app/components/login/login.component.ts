import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AsbUser } from '../../models/asbuser.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthenticationService ]
})
export class LoginComponent implements OnInit {

  public user: AsbUser;

  constructor(private authService: AuthenticationService) { }

  login() {
    this.authService.login(this.user);
  }

  ngOnInit() {
    localStorage.removeItem('user');
    this.user = new AsbUser(null, null, null, null, null);
  }

}
