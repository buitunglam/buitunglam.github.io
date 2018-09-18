import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from "@angular/forms";

@Directive({
  selector: '[appStringValidateForm]',
  providers: [{provide: NG_VALIDATORS, useExisting: StringValidateFormDirective, multi: true}]
})

export class StringValidateFormDirective {

  constructor() { }
  public stringValidate(control: AbstractControl):{ [key: string]: any } {
      const validate = control.value.toString().toLocaleLowerCase().indexOf("Khóa học") != -1;
      return control.value < 1 || validate ? null : {appStringValidateForm: true}
  }
}
