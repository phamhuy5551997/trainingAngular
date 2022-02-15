import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import {MessageService} from 'primeng/api';
import { MessageToastService } from 'src/app/core/services/message/message.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss'],
  providers: [MessageService]
})
export class AdminUserComponent implements OnInit {
  public listUser:any=[];
  searchFilter:string="";
  listFill:any=[];
  userDelete:string="";
  constructor(
    private authService:AuthService,
    private messageService: MessageService,
    private messageToastService:MessageToastService,
    ) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.listUser=[];
    this.authService.GetAllUsers().subscribe(data=>{
      this.listUser = [...data]
      //console.log(this.listUser);
    })
  }

  ondeleteUser(v:any){
    this.userDelete = v.taiKhoan;
    this.messageService.clear();
    this.messageService.add({key: 'deleteUser', sticky: true, severity:'warn', summary:'Are you sure Delete User?', detail:'Confirm to proceed'});
  }

  onConfirm() {
    this.messageService.clear('deleteUser');
    this.authService.DeleteUser(this.userDelete).subscribe(res=>{
      console.log(res)
      if(res.Error){
        if(res.Error.text){
          this.messageToastService.shareMessage.next(
            {severity:'info', summary: 'Info', detail: `Delete User ${this.userDelete} successful !`}
          )
        }else{
          this.messageToastService.shareMessage.next(
            {severity:'error', summary: 'Error', detail: `${res.Error}`}
          )
        }
      }
    })
  }

  onReject() {
    this.messageService.clear('deleteUser');
  }

  onChange(){
    this.listFill=[];
    let txt2 = this.searchFilter.trim().toLocaleLowerCase().replace(/[#_@$*!?><~"'`]/g,'');
    let txt = txt2.replace(/\s\s+/g,'');
    //console.log(txt);
    this.listUser?.filter(item=>{
      if(item.taiKhoan.indexOf(txt) !== -1){
        this.listFill.push(item);
      }
    });
  }

}
