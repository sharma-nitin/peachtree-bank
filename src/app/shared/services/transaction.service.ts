import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IReviewData, ITransactionResponse, ITransactions } from '../interfaces/shared';
import { sourceAccount } from '../models/transfer';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  localUrl = 'assets/mock-data/transactions.json';
  constructor(private http: HttpClient) {}

  private transactions = new Subject<Array<ITransactions>>();
  transactions$ = this.transactions.asObservable();

  /**
   *
   * @returns source Account information of user
   */
  getSourceAccount = (): Observable<ITransactions> => {
    return of(sourceAccount);
  }

  /**
   * fetch transactions data from the server
   */
  getTransactions = () => {
    this.http.get(this.localUrl).subscribe(
      (res: ITransactionResponse) => {
        this.transactions.next(res.data);
      },
      () => {
        this.transactions.next([]);
      }
    );
  }

  /**
   *
   * @param data
   * post the transaction data
   */
  postTransaction = (data: IReviewData) => {
    const payload = {
      categoryCode: '#15238',
      dates: {
        valueDate: new Date().getTime(),
      },
      transaction: {
        amountCurrency: {
          amount: data.amount,
          currencyCode: 'EUR',
        },
        type: 'Online Transfer',
        creditDebitIndicator: 'DBIT',
      },
      merchant: {
        name: data.toAccount,
        accountNumber: 'PX64397745065188826',
      },
    };
    this.transactions.next([payload]);
  }
}
