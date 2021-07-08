import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtReviewTransferComponent } from './pt-review-transfer.component';

describe('PtReviewTransferComponent', () => {
  let component: PtReviewTransferComponent;
  let fixture: ComponentFixture<PtReviewTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtReviewTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtReviewTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
