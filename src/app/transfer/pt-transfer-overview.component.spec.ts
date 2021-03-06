import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferOverviewComponent } from './pt-transfer-overview.component';

describe('TransferOverviewComponent', () => {
  let component: TransferOverviewComponent;
  let fixture: ComponentFixture<TransferOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
