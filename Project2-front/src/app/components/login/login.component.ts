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

  public user = new AsbUser(null, null, null, null, null);
  public errorMsg = '';

  constructor(private authService: AuthenticationService) { }

  login() {
    if (!this.authService.login(this.user)) {
      this.errorMsg = 'Login failed';
    }
  }

  ngOnInit() {
  }

}
