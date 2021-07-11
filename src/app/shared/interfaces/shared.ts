export interface Ivalidator {
  invalidentry?: boolean;
  maxlimit?: boolean;
  requiredValue?: number;
}

export interface IReviewData {
  fromAccount: string,
  toAccount: string;
  amount:  number|string;
}

export interface ITransactions {
  categoryCode: string;
  dates: IDates;
  transaction: ITransaction;
  merchant: IMerchant;
}
export interface ITransaction {
  amountCurrency: IAmountCurrency;
  type: string;
  creditDebitIndicator: string;
}

export interface IDates {
  valueDate: number | string;
}

export interface IAmountCurrency {
  amount: number|string;
  currencyCode: string;
}

export interface IMerchant {
  name: string;
  accountNumber: string;
}

export interface ITransactionResponse {
  data: Array<ITransactions>;
}

