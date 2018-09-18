import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringValidateFormDirective } from './Directive/string-validate-form.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    StringValidateFormDirective
  ],
  declarations: [StringValidateFormDirective]
})
export class SharedModule { }
