import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AsbUser } from '../models/asbuser.model';

const users = [
  new AsbUser(1, 'CTaylor23', 'password', 'Carter', 'Taylor'),
  new AsbUser(2, 'Bobbert', '123', 'Bob', 'Bert'),
];

@Injectable()
export class AuthenticationService {

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  login(user) {
    const authenticatedUser = users.find(u => u.username === user.username);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
      this.router.navigate(['home']);
      return true;
    }
    return false;

  }

   checkCredentials() {
    if (localStorage.getItem('user') === null) {
        this.router.navigate(['login']);
    }

}

}

