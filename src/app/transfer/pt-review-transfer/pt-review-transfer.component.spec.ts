import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReviewTransferComponent } from './pt-review-transfer.component';

describe('ReviewTransferComponent', () => {
  let component: ReviewTransferComponent;
  let fixture: ComponentFixture<ReviewTransferComponent>;

  beforeEach(() => {
    const ngbActiveModalStub = () => ({ close: sendData => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ReviewTransferComponent],
      providers: [{ provide: NgbActiveModal, useFactory: ngbActiveModalStub }]
    });
    fixture = TestBed.createComponent(ReviewTransferComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`title has default value`, () => {
    expect(component.title).toEqual(`<b>Review</b> Transfer`);
  });



  it('makes call to closeModal ', () => {
    spyOn(component, 'closeModal').and.callThrough();
    fixture.whenStable().then(() => {
      component.closeModal('close');
      expect(component.closeModal('close')).toHaveBeenCalled();
    });
  });

  it('makes call to sendTransfer ', () => {
    spyOn(component, 'sendTransfer').and.callThrough();
    fixture.whenStable().then(() => {
      component.sendTransfer('send');
      expect(component.sendTransfer('send')).toHaveBeenCalled();
    });
  });

});
