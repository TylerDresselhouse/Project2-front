import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Board } from '../models/board.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { AsbUser } from '../models/asbuser.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class BoardService {
    private newBoardsUrl = environment.board.save;

    constructor(private http: HttpClient) { }

    getBoards(userId: number) {
        const getBoardsUrl = environment.board.get(userId);
        return this.http.get<Board[]>(getBoardsUrl).map(
            data => {
                return data;
            },
            err => {
                console.log('Error in getBoards in BoardService (This only executes when the first function is not successful');
            }
        );
    }

    createBoard(newBoard: Board, userId: number) {
        const saveBoardUrl = environment.board.save(userId);
        return this.http.post<Board>(saveBoardUrl, newBoard, httpOptions).map(
            data => {
                return data;
            },
            err => console.log('error caught:' + err)
        );
    }

    getBoardMembers(boardId: number) {
        const getBoardMembersUrl = environment.boardMembers.get(boardId);
        return this.http.get<AsbUser[]>(getBoardMembersUrl)
        .map( data => {
            return data;
        },
            err => console.log('error caught:' + err));
    }
}

