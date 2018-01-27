import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AsbUser } from '../models/asbuser.model';
import { UserBoardRole } from '../models/boarduserrole.model';

@Injectable()
export class InviteService {

  constructor(private http: HttpClient) { }

  getUser(username: String) {
    const getUserUrl = environment.user.get(username);
    return this.http.get<AsbUser>(getUserUrl);
  }

  addUserToBoard(uId: number, bId: number, role: UserBoardRole) {
    const addUserToBoard = environment.board.invite(uId, bId);
    return this.http.post(addUserToBoard, role);
  }
}
