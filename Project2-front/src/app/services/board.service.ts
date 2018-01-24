import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Board } from '../models/board.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class BoardService {
    private url = 'http://localhost:8080/get/boards';

    constructor(private http: Http) { }

    getBoards(): Observable<Board[]> {
        return this.http
        .get(this.url)
        .map((response: Response) => {
            return <Board[]> response.json();
        });
    }
}

