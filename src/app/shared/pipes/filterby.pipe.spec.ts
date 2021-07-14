import { TestBed } from '@angular/core/testing';
import { FilterbyPipe } from './filterby.pipe';

describe('FilterbyPipe', () => {
  let pipe: FilterbyPipe;
  const mockdata = [  {
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
  }, {
    categoryCode: '#12a580',
    dates: {
      valueDate: '2020-02-19'
    },
    transaction: {
      amountCurrency: {
        amount: '82.02',
        currencyCode: 'EUR'
      },
      type: 'Card Payment',
      creditDebitIndicator: 'DBIT'
    },
    merchant: {
      name: 'The Tea Lounge',
      accountNumber: 'SI64397745065188826'
    }
  }];
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [FilterbyPipe] });
    pipe = TestBed.inject(FilterbyPipe);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Filter item based on empty search key', () => {
    expect(pipe.transform(mockdata, '').length).toEqual(mockdata.length);
  });

  it('Filter item by existing search key', () => {
    expect(pipe.transform(mockdata, 'Backbase').length).toEqual(1);
  });

  it('Filter item by non existing search key', () => {
    expect(pipe.transform(mockdata, 'community').length).toEqual(0);
  });
});
