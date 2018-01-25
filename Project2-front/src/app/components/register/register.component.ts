import { Component, OnInit } from '@angular/core';
import { AsbUser } from '../../models/asbuser.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: AsbUser;

  constructor(private authService: AuthenticationService) { }

  register() {
    this.authService.register(this.user);
  }

  ngOnInit() {
    this.user = new AsbUser(null, null, null, null, null);
  }

}
