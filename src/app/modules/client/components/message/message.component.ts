
import { Component, OnInit,DoCheck } from '@angular/core';
import {MessageService} from 'primeng/api';
import { MessageToastService } from 'src/app/core/services/message/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  providers: [MessageService]
})
export class MessageComponent implements OnInit,DoCheck {
  dataMGS:any={}
  constructor(
    private messageService: MessageService,
    private messageToastService:MessageToastService
    ) { }

  ngOnInit(): void {
    //this.getSendMessage();
  }
  ngDoCheck(): void {
    //this.getSendMessage();
  }
  getSendMessage(){
   let dataMgs = this.messageToastService.getSend();
    this.dataMGS={...dataMgs};
    console.log('r');
    this.showMesage();
  }
  showMesage(){
    if(this.dataMGS === {}){
    }else{
      this.messageService.add({severity:this.dataMGS.severity, summary: this.dataMGS.summary, detail: this.dataMGS.detail,life:6000});
      this.messageToastService.sendMessage({});
    }
  }
}
