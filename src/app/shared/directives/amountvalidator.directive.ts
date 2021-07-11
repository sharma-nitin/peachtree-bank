import { NG_VALIDATORS, FormControl } from '@angular/forms';
import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { Ivalidator } from '../interfaces/shared';

@Directive({
  selector: '[ptAmountvalidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: AmountvalidatorDirective, multi: true }
  ]
})
export class AmountvalidatorDirective {

@Input('ptAmountvalidator') balance: number;

private regex: RegExp = new RegExp(/^\d*\.?\d{0,4}$/g);
private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
constructor(private el: ElementRef) {
}

/**
 *
 * @param event
 * restrict the invalid entry to the host
 */
@HostListener('keydown', ['$event'])
onKeyDown(event: KeyboardEvent): void {

  if (this.specialKeys.indexOf(event.key) !== -1) {
    return;
  }
  const current: string = this.el.nativeElement.value;
  const position = this.el.nativeElement.selectionStart;
  const next: string = [current.slice(0, position), event.key === 'Decimal' ? '.' : event.key, current.slice(position)].join('');
  if (next && !String(next).match(this.regex)) {
    event.preventDefault();
  }
}

/**
 *
 * @param control formcontrol event passed from input
 * @returns validation performing check on amount
 */
  validate(control: FormControl): Ivalidator {

    const input = control.value;
    const sourceBalance = Number(this.balance);

    if (isNaN(input) || input <= 0) {
      return { invalidentry: true };
    }

    if (input > sourceBalance + 500) {
      return { maxlimit: true, requiredValue: sourceBalance + 500 };
    }

    return null;
  }
}
