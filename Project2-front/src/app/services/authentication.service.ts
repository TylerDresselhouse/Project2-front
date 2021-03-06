import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AsbUser } from '../models/asbuser.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { AlertService } from './alert.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment.prod';

const users = [
  new AsbUser(1, 'CTaylor23', 'password', 'Carter', 'Taylor'),
  new AsbUser(2, 'Bobbert', '123', 'Bob', 'Bert'),
];

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {
  /* private loggedIn = false;

  get isLoggedIn() {
    return this.loggedIn;
  } */

  public authenticatedUser: AsbUser;

  constructor(private router: Router, private http: HttpClient, private alertService: AlertService) { }

  logout() {
    localStorage.removeItem('user');
    // this.appComponent.isLoggedIn = false;
    this.router.navigate(['login']);
  }

  login(user) {
    const loginUrl = environment.user.login();
    this.http.post<AsbUser>(loginUrl, user, httpOptions)
      .subscribe(
        (data => this.authenticatedUser = data),
        (err => console.log('error: ', err)),
        ( () => {
          if (this.authenticatedUser) {
            localStorage.setItem('user', JSON.stringify(this.authenticatedUser));
            this.router.navigate(['home']);
            return true;
          } else { this.alertService.error('Invalid username/password');
                  return false; }
        })
        );
  }

  register(user): boolean {
    const registerUrl = environment.user.register();
      this.http.post<AsbUser>(registerUrl, user, httpOptions)
      .subscribe( newUser => { console.log(newUser);
        if (newUser) {
            this.alertService.success('Successfully registered');
            // clear input fields in register template
            user.firstName = '';
            user.lastName = '';
            user.username = '';
            user.password = '';
        } else {
            this.alertService.error('That username already exists');
        }
      }
                );
      return false;
  }

   checkCredentials() {

    if (localStorage.getItem('user') === null) {
      this.router.navigate(['login']);
    }

  }

}

