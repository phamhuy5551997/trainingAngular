import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subStringPipe'
})
export class SubStringPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    if(value?.length > args){
      return value.substr(0,args)+'...';
    }else{
      return value
    }
  }

}
