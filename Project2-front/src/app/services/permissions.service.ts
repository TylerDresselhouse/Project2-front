import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserBoardRole } from '../models/boarduserrole.model';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PermissionsService {

  currentUserBoardRole = new UserBoardRole(null, 'Custom Role',
  false, false, false, false, false, false,
  false, false, false );

  constructor(private http: HttpClient) { }

  getPermissions(userId: number, boardId) {
    const getUserBoardRole = environment.user.getRole(userId, boardId);
    return this.http.get<UserBoardRole>(getUserBoardRole)
    .map(
      (data => {
        return data; }),
      (err => console.log('error: ', err))
      );
  }

}
