import { Component, OnInit } from '@angular/core';
import { AsbUser } from '../../models/asbuser.model';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertService } from '../../services/alert.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: AsbUser;

  constructor(private authService: AuthenticationService, private alertService: AlertService,
    private navService: NavbarService) { }

  register() {
    if (this.user.firstName === '' || this.user.firstName === null) {
      this.alertService.warn('Please enter a first name');
      return;
    } else if (this.user.lastName === '' || this.user.lastName === null) {
      this.alertService.warn('Please enter a last name');
      return;
    } else if (this.user.username === '' || this.user.username === null) {
      this.alertService.warn('Please enter a username');
      return;
    } else if (this.user.password === '' || this.user.password === null) {
      this.alertService.warn('Please enter a password');
      return;
    } else {
      this.authService.register(this.user);
    }

  }

  ngOnInit() {
    this.user = new AsbUser(null, null, null, null, null);
    this.navService.hide();
    this.navService.hideBoardMembers();
    this.navService.hideBurndown();
  }

}
