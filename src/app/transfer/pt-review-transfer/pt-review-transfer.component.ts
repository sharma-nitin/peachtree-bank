import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pt-pt-review-transfer',
  templateUrl: './pt-review-transfer.component.html'
})
export class ReviewTransferComponent implements OnInit {
 @Input() data;
 title = '<b>Review</b> Transfer';
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeModal(sendData): void {
    this.activeModal.close(sendData);
  }

  sendTransfer(sendData): void {
    this.activeModal.close(sendData);
  }

}
