import { AbstractControl, ValidatorFn } from '@angular/forms';

// export function stringOnlyValidator(): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const forbidden = /[0-9]/.test(control.value);
//     return forbidden ? { stringOnly: { value: control.value } } : null;
//   };
// }

export class StringOnlyValidator {
  static validate(control: AbstractControl): { [key: string]: any } | null {
    const forbidden = /[0-9]/.test(control.value);
    return forbidden ? { stringOnly: { value: control.value } } : null;
  }
}
