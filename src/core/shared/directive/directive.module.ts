import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnHoverDirective } from './btn-hover/btn-hover.directive';



@NgModule({
  declarations: [BtnHoverDirective],
  imports: [
    CommonModule
  ],
  exports:[
    BtnHoverDirective
  ]
})
export class DirectiveModule { }
