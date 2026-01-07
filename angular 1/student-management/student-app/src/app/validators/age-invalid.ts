import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appAgeInvalid]',
  providers: [
  {
    provide: NG_VALIDATORS,
    useExisting: AgeInvalid,
    multi: true
  }
]

})
export class AgeInvalid implements Validator{

  constructor() { }

  validate(control: any) {
    const age = control.value;
    if (age < 18 || age > 60) {
      return { ageInvalid: true };
    }
    return null;  
  }

}
