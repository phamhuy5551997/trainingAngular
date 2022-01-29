import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubStringPipe } from './sub-string/sub-string.pipe';



@NgModule({
  declarations: [SubStringPipe],
  imports: [
    CommonModule
  ],
  exports:[
    SubStringPipe
  ]
})
export class PipeModule { }


