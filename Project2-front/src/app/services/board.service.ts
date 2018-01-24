import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Board } from '../models/board.model';
import { Observable } from 'rxjs/Observable';

const boards = [
  new Board(1, 'Board Numero Uno'),
  new Board(2, 'Board Number'),
];

@Injectable()
export class BoardService {

    private url;

    constructor(private router: Router) { }

    getBoards(): Board[] {
        return boards;
    }
}

