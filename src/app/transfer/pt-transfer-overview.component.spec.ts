import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtTransferOverviewComponent } from './pt-transfer-overview.component';

describe('PtTransferOverviewComponent', () => {
  let component: PtTransferOverviewComponent;
  let fixture: ComponentFixture<PtTransferOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtTransferOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtTransferOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
