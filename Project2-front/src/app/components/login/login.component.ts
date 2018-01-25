import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AsbUser } from '../../models/asbuser.model';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthenticationService ]
})
export class LoginComponent implements OnInit {

  public user: AsbUser;

  constructor(private authService: AuthenticationService, private alertService: AlertService) { }

  login() {
    if (this.user.username === '' || this.user.username === null) {
      this.alertService.warn('Please enter a username');
      return;
    } else if (this.user.password === '' || this.user.password === null) {
      this.alertService.warn('Please enter a password');
      return;
    } else {
    this.authService.login(this.user);
    }
  }

  ngOnInit() {
    localStorage.removeItem('user');

    this.user = new AsbUser(null, null, null, null, null);
  }

}
