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
    private newBoardsUrl = '';

    constructor(private http: HttpClient) { }

    getBoards(): Observable<Board[]> {
        return this.http
        .get(this.url)
        .map((response: Response) => {
            return <Board[]> response.json();
        });
    }

    createBoard(newBoard: Board): Observable<Board> {
        return this.http.post<Board>(this.newBoardsUrl, newBoard, httpOptions);
    }
}

