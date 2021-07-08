import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtTransferComponent } from './pt-transfer.component';

describe('PtTransferComponent', () => {
  let component: PtTransferComponent;
  let fixture: ComponentFixture<PtTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
