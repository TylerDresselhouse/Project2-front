import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Board } from '../models/board.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class BoardService {
    private url = 'http://localhost:8080/api/v1/get/boards';
    private newBoardsUrl = 'http://localhost:8080/api/v1/create/board';

    constructor(private http: HttpClient) { }

    getBoards() {
        return this.http.get<Board[]>(this.url).map(
            data => {
                return data;
            },
            err => {
                console.log('Error in getBoards in BoardService (This only executes when the first function is not successful')
            }
        );
    }

    createBoard(newBoard: Board) {
        return this.http.post<Board>(this.newBoardsUrl, newBoard, httpOptions).subscribe(
            data => console.log('successful return of data: ' + data),
            err => console.log('error caught:' + err)
        );
    }
}

