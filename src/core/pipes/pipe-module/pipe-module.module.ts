import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubstringPipePipe } from './substring-pipe.pipe';



@NgModule({
  declarations: [SubstringPipePipe],
  imports: [
    CommonModule,
  ],
  exports:[
    SubstringPipePipe
  ]
})
export class PipeModuleModule { }
