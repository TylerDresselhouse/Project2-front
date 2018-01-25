import { Component, OnInit, Input } from '@angular/core';
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
  @Input() newBoard: Board;

  constructor(private boardService: BoardService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.newBoard = new Board(0, null);
    this.authService.checkCredentials();
    this.getBoards();
  }

  getBoards(): void {
     this.boardService.getBoards().subscribe(
       data => {this.boards = data; },
       err => console.log('Error getting boards')
     );
     console.log('component board: ' + this.boards);
  }

  createBoard(): void {
    console.log(this.newBoard);
    this.boardService.createBoard(this.newBoard);
  }

}
