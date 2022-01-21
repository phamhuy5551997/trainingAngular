import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substringPipe'
})
export class SubstringPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value.length > 9){
      return value.substr(0,8) + '...';
    }
    else{
      return value
    }

  }

}
