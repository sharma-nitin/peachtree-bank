import { NG_VALIDATORS, FormControl } from '@angular/forms'
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ptAmountvalidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: AmountvalidatorDirective, multi: true }
  ]
})
export class AmountvalidatorDirective {

@Input("ptAmountvalidator") balance:number

private regex: RegExp = new RegExp(/^\d*\.?\d{0,4}$/g);
private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
constructor(private el: ElementRef) {
}
@HostListener('keydown', ['$event'])
onKeyDown(event: KeyboardEvent) {
  console.log(this.el.nativeElement.value);

  if (this.specialKeys.indexOf(event.key) !== -1) {
    return;
  }
  let current: string = this.el.nativeElement.value;
  const position = this.el.nativeElement.selectionStart;
  const next: string = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
  if (next && !String(next).match(this.regex)) {
    event.preventDefault();
  }
}

  validate(control: FormControl) {

    let input = control.value;
    let sourceBalance = Number(this.balance);

    if (isNaN(input)) {
      return { 'invalid': true }
    }

    if (input > sourceBalance + 500) {
      return { 'maxlimit': true, 'requiredValue': sourceBalance+500 }
    }

    return null;
  }
}
