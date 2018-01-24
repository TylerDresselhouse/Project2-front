import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Board } from '../../models/board.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  boards: Board[] = [];

  constructor(private boardService: BoardService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.checkCredentials();
  }

  getBoards(): void {
    this.boards = this.boardService.getBoards();
  }

}
