import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AsbUser } from '../models/asbuser.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { AlertService } from './alert.service';

const users = [
  new AsbUser(1, 'CTaylor23', 'password', 'Carter', 'Taylor'),
  new AsbUser(2, 'Bobbert', '123', 'Bob', 'Bert'),
];

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {
  loginUrl = `http://localhost:8080/api/v1/login`;
  registerUrl = `http://localhost:8080/api/v1/register`;

  public authenticatedUser: AsbUser;

  constructor(private router: Router, private http: HttpClient, private alertService: AlertService) { }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  login(user) {
    this.http.post<AsbUser>(this.loginUrl, user, httpOptions)
      .subscribe(
        (data => this.authenticatedUser = data),
        (err => console.log('error: ', err)),
        ( () => { if (this.authenticatedUser) {
                    localStorage.setItem('user', JSON.stringify(this.authenticatedUser));
                    this.router.navigate(['home']);
                    return true;
                 } else { this.alertService.error('Invalid username/password');
                          return false; }
        })
        );
  }

  register(user) {
      return this.http.post<AsbUser>(this.registerUrl, user, httpOptions)
      .subscribe( newUser => { console.log(newUser);
                                if (newUser) {
                                  this.alertService.success('Successfully registered');
                                } else { this.alertService.error('That username already exists'); }
                              }
                );
  }

   checkCredentials() {
    if (localStorage.getItem('user') === null) {
        this.router.navigate(['login']);
    }

}

}

