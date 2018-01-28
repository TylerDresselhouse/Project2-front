import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AsbUser } from '../../models/asbuser.model';
import { AlertService } from '../../services/alert.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: AsbUser;

  constructor(private authService: AuthenticationService,
    private alertService: AlertService,
    private navService: NavbarService) { }

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
    this.navService.hide();
    this.navService.hideBoardMembers();
    this.navService.hideBurndown();
    localStorage.removeItem('user');
    localStorage.removeItem('boards');
    localStorage.removeItem('currBoardId');
    this.user = new AsbUser(null, null, null, null, null);
  }

}
