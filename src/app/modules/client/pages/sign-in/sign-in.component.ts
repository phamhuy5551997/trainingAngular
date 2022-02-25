
import { Component, OnInit, OnDestroy } from '@angular/core';
//import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import {MessageService} from 'primeng/api';
import { Subscription } from 'rxjs';
//import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { MessageToastService } from 'src/app/core/services/message/message.service';
import { User } from 'src/app/core/interfaces/user';
import { UserClass } from 'src/app/core/models/user.model';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [MessageService]
})
export class SignInComponent implements OnInit, OnDestroy {
  constructor(
    private authService:AuthService,
    private location:Location,
    private messageService:MessageService,
    private messageToastService:MessageToastService,
  ) { }

  private subcript:Subscription
  //variable unitest
  public statusLogin:Boolean = false;

  ngOnInit(): void {
  }

  onSubmit(value:any){
    const user:User = {
      "taiKhoan": value.userName,
      "matKhau": value.password
    }
    this.statusLogin = true;
    this.subcript = this.authService.LoginUserAPI(user).subscribe(
      data=>{
        //console.log(data);
        this.messageToastService.shareMessage.next(
          {severity:'info', summary: 'Login Succesful', detail: `Hello User ${data.hoTen}  !!` }
        )
        localStorage.setItem('userLogin',JSON.stringify(data))
        let a1 =  setTimeout(() => {
          this.location.back();
          clearTimeout(a1);
        }, 2000);
      },
      Error=>{
        //console.log(Error.error);
        this.messageToastService.shareMessage.next(
          {severity:'error', summary: 'Error', detail: `${Error.error}`}
        )
      }
    )
  }

  ngOnDestroy(): void {
    this.subcript.unsubscribe();
  }
}
