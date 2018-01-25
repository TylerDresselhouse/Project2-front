import { Component, OnInit } from '@angular/core';
import { AsbUser } from '../../models/asbuser.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: AsbUser;

  constructor() { }

  register() { }

  ngOnInit() {
    this.user = new AsbUser(null, null, null, null, null);
  }

}
