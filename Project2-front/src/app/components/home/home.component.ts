import { Component, OnInit, Input } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Board } from '../../models/board.model';
import { NavbarService } from '../../services/navbar.service';
import { AlertService } from '../../services/alert.service';
import { AsbUser } from '../../models/asbuser.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: AsbUser;
  boards: Board[] = [];
  @Input() newBoard: Board;

  constructor(private boardService: BoardService,
    private authService: AuthenticationService,
    private navService: NavbarService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.authService.checkCredentials();
    this.navService.show();
    this.navService.hideBoardMembers();
    this.navService.hideBurndown();
    this.newBoard = new Board(0, null);
    this.getBoards();
  }

  getBoards(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log('This user id is ' + this.user.id);
     this.boardService.getBoards(this.user.id).subscribe(
       data => {this.boards = data; },
       err => console.log('Error getting boards'),
       () => localStorage.setItem('boards', JSON.stringify(this.boards))
     );
     console.log('component board: ' + this.boards);
  }

  createBoard(title: string): void {
    console.log('The input is: ' + title);
    this.user = JSON.parse(localStorage.getItem('user'));
    this.newBoard = new Board(0, title);
    this.boardService.createBoard(this.newBoard, this.user.id).subscribe(
      data => {
        console.log('The input is: ' + title);
        this.newBoard = data;
        this.boards.push(this.newBoard);
        this.alertService.success('Board was successfully added!');
      },
      err => {
        if (this.newBoard.name.length > 20) {
          this.alertService.error('Board Title must be less than 20 characters');
        }else {
          this.alertService.error('Could not add board: ' + err);
        }
      }
    );
  }

}
