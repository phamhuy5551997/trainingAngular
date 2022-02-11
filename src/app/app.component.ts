import { MessageToastService } from 'src/app/core/services/message/message.service';
import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  mes:any={}
  constructor(
    private messageService: MessageService,
    private messageToastService:MessageToastService
    ){
      this.messageToastService.shareMessage.subscribe(data=>{
        this.mes=data
        this.messageService.add(
            {
              severity: `${this.mes.severity}`,
              summary: `${this.mes.summary}`,
              detail: `${this.mes.detail}`,
              life:15000
            }
          );

        })
      }

  ngOnInit(): void {
  }

}
