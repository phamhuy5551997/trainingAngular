
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import {MessageService} from 'primeng/api';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
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
  ) { }
  private subcript:Subscription
  ngOnInit(): void {
  }
  ngOnDestroy(): void {

  }

  onSubmit(value:any){
    const user = {
      "taiKhoan": value.userName,
      "matKhau": value.password
    }
    this.authService.LoginUserAPI(user).subscribe(
      data=>{
        //console.log(data);
        this.messageService.add({severity:'success', summary: 'Login Succesful',life:5000, detail: `Hello ${data.hoTen}`});
        localStorage.setItem('userLogin',JSON.stringify(data))
        setTimeout(() => {
          this.location.back()
        }, 5000);
      },
      Error=>{
        //console.log(Error.error);
        this.messageService.add({severity:'error', summary: 'Error',life:5000, detail: `${Error.error}`});
      }
    )
  }
}
