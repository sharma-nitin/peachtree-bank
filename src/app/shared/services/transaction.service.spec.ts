import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionService],
    });
    service = TestBed.inject(TransactionService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`localUrl has default value`, () => {
    expect(service.localUrl).toEqual(`assets/mock-data/transactions.json`);
  });

  it('makes call to getSourceAccount ', () => {
    spyOn(service, 'getSourceAccount').and.callThrough();
    service.getSourceAccount();
    expect(service.getSourceAccount).toHaveBeenCalled();
  });

  it('makes call to getTransactions ', () => {
    spyOn(service, 'getTransactions').and.callThrough();
    service.getTransactions();
    expect(service.getTransactions).toHaveBeenCalled();
  });

  it('makes call to postTransaction ', () => {
    spyOn(service, 'postTransaction').and.callThrough();
    const modaldata = {
      fromAccount: '',
      toAccount: '',
      amount: 0,
    };
    service.postTransaction(modaldata);
    expect(service.postTransaction).toHaveBeenCalled();
  });
});
