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
  newBoard: Board;

  constructor(private boardService: BoardService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.checkCredentials();
    this.getBoards();
  }

  getBoards(): void {
    this.boardService.getBoards()
    .subscribe((daboards: Board[]) => {
            // do stuff with our data here.
            // ....
            // asign data to our class property in the end
            // so it will be available to our template
      this.boards = daboards;
      console.log(this.boards);
    });
  }

  createBoard(): void {
    this.boardService.createBoard(this.newBoard);
  }

}
