import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IReviewData } from 'src/app/shared/interfaces/shared';

@Component({
  selector: 'pt-pt-review-transfer',
  templateUrl: './pt-review-transfer.component.html',
})
export class ReviewTransferComponent implements OnInit {
  @Input() data: IReviewData;
  title = '<b>Review</b> Transfer';
  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  /**
   *
   * @param sendData
   * closes the modal and passes close notifier data
   */
  closeModal(sendData: string): void {
    this.activeModal.close(sendData);
  }

  /**
   *
   * @param sendData
   * closes the modal and passes sumbit notifier data
   */
  sendTransfer(sendData: string): void {
    this.activeModal.close(sendData);
  }
}
