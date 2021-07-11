import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { FormsModule } from '@angular/forms';
import { TransferComponent } from './pt-transfer.component';
import { of } from 'rxjs';

describe('TransferComponent', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;
  const sourceresponse = {
    categoryCode: '#12a580',
    dates: {
      valueDate: 1600493600000,
    },
    transaction: {
      amountCurrency: {
        amount: 5000,
        currencyCode: 'EUR',
      },
      type: 'Salaries',
      creditDebitIndicator: 'CRDT',
    },
    merchant: {
      name: 'Backbase',
      accountNumber: 'SI64397745065188826',
    },
  };
  beforeEach(() => {
    const ngbModalStub = () => ({
      open: (reviewTransferComponent) => ({
        componentInstance: { data: {} },
        result: { then: () => of('send') },
      }),
    });
    const transactionServiceStub = () => ({
      getSourceAccount: () => ({ subscribe: (f) => f(sourceresponse) }),
      postTransaction: (transferModel) => ({}),
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TransferComponent],
      providers: [
        { provide: NgbModal, useFactory: ngbModalStub },
        { provide: TransactionService, useFactory: transactionServiceStub },
      ],
    });
    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`title has default value`, () => {
    expect(component.title).toEqual(`<b>Make</b> Transfer`);
  });

  it(`icon has default value`, () => {
    expect(component.icon).toEqual(`folder`);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'fetchSourceAccountData').and.callThrough();
      component.ngOnInit();
      expect(component.fetchSourceAccountData).toHaveBeenCalled();
      expect(component.sourceAccountData).toEqual(sourceresponse);
      expect(component.sourceAccountBalance).toEqual(
        sourceresponse.transaction.amountCurrency.amount
      );
    });
  });

  describe('fetchSourceAccountData', () => {
    it('makes expected calls', () => {
      const transactionServiceStub: TransactionService =
        fixture.debugElement.injector.get(TransactionService);
      spyOn(transactionServiceStub, 'getSourceAccount').and.callThrough();
      component.fetchSourceAccountData();
      expect(transactionServiceStub.getSourceAccount).toHaveBeenCalled();
    });
  });

  it('makes call to onSubmit ', () => {
    spyOn(component, 'onSubmit').and.callThrough();
    fixture.whenStable().then(() => {
      component.onSubmit('');
      expect(component.onSubmit('')).toHaveBeenCalled();
    });
  });
});
