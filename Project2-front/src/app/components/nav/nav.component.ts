import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../services/authentication.service';
import { NavbarService } from '../../services/navbar.service';
import { BoardMembersComponent } from '../board-members/board-members.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ActivatedRoute } from '@angular/router';
import { BurndownchartComponent } from '../burndownchart/burndownchart.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public boardId: number;

  constructor(private authenticationService: AuthenticationService,
    private navService: NavbarService, private modalService: NgbModal, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  openBoardMembers() {
    const modalRef = this.modalService.open(BoardMembersComponent);
  }

  openBurnDown() {
    const modalRef2 = this.modalService.open(BurndownchartComponent);
  }

}
