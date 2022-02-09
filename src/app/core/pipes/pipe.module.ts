import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubStringPipe } from './sub-string/sub-string.pipe';
import { SafePipe } from './custom-url/safe.pipe';



@NgModule({
  declarations: [SubStringPipe, SafePipe],
  imports: [
    CommonModule
  ],
  exports:[
    SubStringPipe,
    SafePipe
  ]
})
export class PipeModule { }


