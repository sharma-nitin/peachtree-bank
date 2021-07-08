import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtTransactionListComponent } from './pt-transaction-list.component';

describe('PtTransactionListComponent', () => {
  let component: PtTransactionListComponent;
  let fixture: ComponentFixture<PtTransactionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtTransactionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtTransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
