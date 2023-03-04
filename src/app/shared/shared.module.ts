import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { StructuralDirectiveDirective } from './directives/structural-directive.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    StructuralDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMsgDirective,
    StructuralDirectiveDirective
  ],
})
export class SharedModule { }
