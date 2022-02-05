import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageToastService {
  megs = {}
  sendMessage(mgs:object){
    this.megs = {...mgs}
  }
  getSend(){
    if(this.megs === {}){
    }else{
      return this.megs;
    }

  }
  constructor() { }
}
