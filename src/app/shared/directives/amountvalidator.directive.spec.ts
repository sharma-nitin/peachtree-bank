import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { AmountvalidatorDirective } from './amountvalidator.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <input ptAmountvalidator>
  `
})
class TestComponent {}

describe('AmountvalidatorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;
  let inputEl: DebugElement;

  beforeEach(() => {
    const elementRefStub = () => ({
      nativeElement: { value: { slice: () => ({}) }, selectionStart: {} }
    });
    TestBed.configureTestingModule({
      declarations: [AmountvalidatorDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    inputEl = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(
      By.directive(AmountvalidatorDirective)
    );
    bareElement = fixture.debugElement.query(
      By.css(':not([ptAmountvalidator])')
    );
  });

  it('should have bare element', () => {
    expect(bareElement).toBeTruthy();
  });

  it('should have 1 element(s) with directive', () => {
    expect(elementsWithDirective.length).toBe(1);
  });

  it('allow backspace from input', () => {
    fixture.detectChanges();
    inputEl.triggerEventHandler('keydown', 'Backspace');
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('');
  });

  it('restrict - from input', () => {
    fixture.detectChanges();
    inputEl.triggerEventHandler('keydown', '-');
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('');
  });

});
