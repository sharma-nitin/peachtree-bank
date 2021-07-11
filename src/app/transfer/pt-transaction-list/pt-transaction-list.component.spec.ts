import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { TransactionListComponent } from './pt-transaction-list.component';

describe('TransactionListComponent', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;
  const transactions = [{
    categoryCode: '#12a580',
    dates: {
      valueDate: 1600493600000
    },
    transaction: {
      amountCurrency: {
        amount: 5000,
        currencyCode: 'EUR'
      },
      type: 'Salaries',
      creditDebitIndicator: 'CRDT'
    },
    merchant: {
      name: 'Backbase',
      accountNumber: 'SI64397745065188826'
    }
  }];
  beforeEach(() => {
    const transactionServiceStub = () => ({
      getTransactions: () => (transactions),
      transactions$: { subscribe: f => f(transactions) }
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TransactionListComponent],
      providers: [
        { provide: TransactionService, useFactory: transactionServiceStub }
      ]
    });
    fixture = TestBed.createComponent(TransactionListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`title has default value`, () => {
    expect(component.title).toEqual(`Transactions <b>List</b>`);
  });

  it(`icon has default value`, () => {
    expect(component.icon).toEqual(`menu`);
  });

  it(`transactions has default value`, () => {
    expect(component.transactions).toEqual([]);
  });

  it('makes call to randomHexColor ', () => {
    spyOn(component, 'randomHexColor').and.callThrough();
    fixture.whenStable().then(() => {
      component.randomHexColor();
      expect(component.randomHexColor()).toMatch('#');
    });
  });

  it('makes call to trackByDate ', () => {
    spyOn(component, 'trackByDate').and.callThrough();
    fixture.whenStable().then(() => {
      component.trackByDate(1, transactions[0]);
      expect(component.trackByDate(1, transactions[0])).toEqual(transactions[0].dates.valueDate);
    });
  });

  it('makes call to onFilter ', () => {
    spyOn(component, 'onFilter').and.callThrough();
    fixture.whenStable().then(() => {
      component.onFilter('backbase');
      expect(component.searchKey).toEqual('backbase');
    });
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'fetchTransactions').and.callThrough();
      component.ngOnInit();
      expect(component.fetchTransactions).toHaveBeenCalled();
    });
  });

  describe('fetchTransactions', () => {
    it('makes expected calls', () => {
      const transactionServiceStub: TransactionService = fixture.debugElement.injector.get(
        TransactionService
      );
      spyOn(transactionServiceStub, 'getTransactions').and.callThrough();
      component.fetchTransactions();
      expect(transactionServiceStub.getTransactions).toHaveBeenCalled();
    });
  });
});
