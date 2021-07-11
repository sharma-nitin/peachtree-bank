import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { PanelContainerComponent } from './pt-panel-container.component';
import { By } from '@angular/platform-browser';

describe('PanelContainerComponent', () => {
  let component: PanelContainerComponent;
  let fixture: ComponentFixture<PanelContainerComponent>;
  let de: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PanelContainerComponent]
    });
    fixture = TestBed.createComponent(PanelContainerComponent);
    component = fixture.componentInstance;
    component.title = 'title';
    de = fixture.debugElement.query(By.all());
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('title to be displayed inside span', () => {
    fixture.detectChanges();
    const el = de.nativeElement;
    expect(el.innerText).toMatch(/title/i);
  });
});
