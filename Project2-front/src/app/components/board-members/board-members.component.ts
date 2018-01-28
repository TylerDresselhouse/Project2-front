import { Component, OnInit } from '@angular/core';
import { AsbUser } from '../../models/asbuser.model';
import { BoardService } from '../../services/board.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-members',
  templateUrl: './board-members.component.html',
  styleUrls: ['./board-members.component.css']
})
export class BoardMembersComponent implements OnInit {

  boardMembers: AsbUser[];

  constructor(private boardService: BoardService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBoardMembers();
  }

  getBoardMembers() {
    const boardId = +localStorage.getItem('currBoardId');
     this.boardService.getBoardMembers(boardId).subscribe(
       data => {this.boardMembers = data;
        console.log(this.boardMembers); },
       err => console.log('Error getting boards'));
  }

}
