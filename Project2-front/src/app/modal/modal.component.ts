// import {Component, Input} from '@angular/core';

// import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'ngbd-modal-content',
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title">Hi there!</h4>
//       <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//       <p>Hello, {{name}}!</p>
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
//     </div>
//   `
// })
// export class NgbdModalContent {
//   @Input() name;

//   constructor(public activeModal: NgbActiveModal) {}
// }

// @Component({
//   selector: 'ngbd-modal-component',
//   templateUrl: './modal-component.html'
// })
// export class NgbdModalComponent {
//   constructor(private modalService: NgbModal) {}

//   open() {
//     const modalRef = this.modalService.open(NgbdModalContent);
//     modalRef.componentInstance.name = 'World';
//   }
// }

// ------------------------ Previous modal attemps below

// import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
// import * as $ from 'jquery';
// import { ModalService } from '../services/modal.service';


// @Component({
//     moduleId: module.id.toString(),
//     selector: 'modal',
//     template: '<ng-content></ng-content>'
// })

// export class ModalComponent implements OnInit, OnDestroy {
//     @Input() id: string;
//     private element: JQuery;

//     constructor(private modalService: ModalService, private el: ElementRef) {
//         this.element = $(el.nativeElement);
//     }

//     ngOnInit(): void {
//         let modal = this;

//         // ensure id attribute exists
//         if (!this.id) {
//             console.error('modal must have an id');
//             return;
//         }

//         // move element to bottom of page (just before </body>) so it can be displayed above everything else
//         this.element.appendTo('body');

//         // close modal on background click
//         this.element.on('click', function (e: any) {
//             var target = $(e.target);
//             if (!target.closest('.modal-body').length) {
//                 modal.close();
//             }
//         });

//         // add self (this modal instance) to the modal service so it's accessible from controllers
//         this.modalService.add(this);
//     }

//     // remove self from modal service when directive is destroyed
//     ngOnDestroy(): void {
//         this.modalService.remove(this.id);
//         this.element.remove();
//     }

//     // open modal
//     open(): void {
//         this.element.show();
//         $('body').addClass('modal-open');
//     }

//     // close modal
//     close(): void {
//         this.element.hide();
//         $('body').removeClass('modal-open');
//     }
// }



// import { Component, OnInit } from '@angular/core';
// import { AngularBasicModalModule, BaseModalConfig, BasicModalService, BaseModal } from 'angular-basic-modal';
// import { Card } from '../models/card.model';

// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',
//   styleUrls: ['./modal.component.css']
// })
// export class ModalComponent implements OnInit {

//   constructor(private modal: BasicModalService) { }

//   bmc = new BaseModalConfig;
//   card: Card;
//   passCard(card) {
//     this.card  = card;
//   }

//   ngOnInit() {
//     this.bmc.title = this.card.title ;
//     this.bmc.message = 'Difficulty: ' + this.card.difficulty + 'Description: ' +  this.card.description;
//     this.bmc.width = 400;
//     this.bmc.height = 160;
//     this.bmc.cancelBtn = 'Great!';

//     setTimeout( () => {
//       this.modal.show(this.bmc, BaseModal).then( res => {
//         console.log(res);
//       });
//     }, 1500);
//   }

// }
