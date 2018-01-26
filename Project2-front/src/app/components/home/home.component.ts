import { Component, OnInit, Input } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Board } from '../../models/board.model';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  boards: Board[] = [];
  @Input() newBoard: Board;

  constructor(private boardService: BoardService,
    private authService: AuthenticationService,
    private navService: NavbarService) { }

  ngOnInit() {
    this.authService.checkCredentials();
    this.navService.show();
    this.newBoard = new Board(0, null);
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
