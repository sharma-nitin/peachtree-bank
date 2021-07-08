import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtPanelContainerComponent } from './pt-panel-container.component';

describe('PtPanelContainerComponent', () => {
  let component: PtPanelContainerComponent;
  let fixture: ComponentFixture<PtPanelContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtPanelContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtPanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
