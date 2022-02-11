import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import {MessageService} from 'primeng/api';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MessageToastService } from 'src/app/core/services/message/message.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [MessageService]
})
export class SignUpComponent implements OnInit,OnDestroy {
  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageToastService:MessageToastService
    ) { }
  FormSignIn!:FormGroup;
  private subcript = new Subscription
  public FormMessage:any={
    fullNameMgs:[
      {type:`required`,mgs:'Please do not leave it blank'},
      {type:'minlength',mgs:'full name at least 5 characters'},
      {type:'maxlength',mgs:'full name at most 18 characters'},
      {type:'pattern',mgs:'full name contains invalid characters'}
    ],
    userNameMgs:[
      {type:'required',mgs:'Please do not leave it blank'},
      {type:'minlength',mgs:'user name at least 5 characters'},
      {type:'maxlength',mgs:'user name at most 18 characters'},
      {type:'pattern',mgs:'user name contains invalid characters'}
    ],
    passwordMgs:[
      {type:'required',mgs:'Please do not leave it blank'},
      {type:'minlength',mgs:'password at least 5 characters'},
      {type:'maxlength',mgs:'password at most 18 characters'},
      {type:'pattern',mgs:'password contains invalid characters'}
    ],
    emailMgs:[
      {type:'required',mgs:'Please do not leave it blank'},
      {type:'minlength',mgs:'email at least 12 characters'},
      {type:'maxlength',mgs:'email at most 22 characters'},
      {type:'email',mgs:'invalid email...'}
    ],
    numberPhoneMgs:[
      {type:'required',mgs:'Please do not leave it blank'},
      {type:'minlength',mgs:'phone at least 10 number'},
      {type:'maxlength',mgs:'phone at most 10 number'},
      {type:'pattern',mgs:'invalid number phone'}
    ],
  }

  ngOnInit(): void {
    this.formSignInReactive();
  }
  //-------
  formSignInReactive():void{
    this.FormSignIn =this.fb.group({
      fullName:['',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(18),
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      userName:['',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(18),
        Validators.pattern('^[a-zA-Z0-9]+$')
      ]],
      password:['',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(18),
        Validators.pattern('^[a-zA-Z0-9]+$')
      ]],
      email:['',[
        Validators.required,
        Validators.email,
        Validators.minLength(12),
        Validators.maxLength(22)
      ]],
      numberPhone:['',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('[03|05|07|08|09]+([0-9]{8})')
      ]]
    });
  }
  //-------
  get fullName(){
    return this.FormSignIn.get('fullName');
  }
  get userName(){
    return this.FormSignIn.get('userName');
  }
  get password(){
    return this.FormSignIn.get('password');
  }
  get email(){
    return this.FormSignIn.get('email');
  }
  get numberPhone(){
    return this.FormSignIn.get('numberPhone');
  }
  //------
  onSubmit(){
    this.messageService.clear();
    this.messageService.add({key: 'signIn', sticky: true, severity:'warn', summary:'Are you Sign-In ?', detail:'Confirm to proceed'});
  }
  //-------
  onConfirm() {
    this.messageService.clear('signIn');
    const dataSignIn = {
      "taiKhoan": this.FormSignIn.get('userName').value,
      "matKhau": this.FormSignIn.get('password').value,
      "email": this.FormSignIn.get('email').value,
      "soDt": this.FormSignIn.get('numberPhone').value,
      "maNhom": "GP09",
      "maLoaiNguoiDung": "QuanTri",
      "hoTen": this.FormSignIn.get('fullName').value
    }
    this.messageToastService.shareMessage.next(
      {severity:'info', summary: 'Info', detail: 'The system is processing registration, please wait...'}
    )
    this.subcript = this.authService.SignInUserAPI(dataSignIn).subscribe(
      data=>{
      //console.log('success',data);
        this.messageToastService.shareMessage.next(
          { severity:'success', summary: 'Success', detail: 'Successful account registration !'}
        )
        this.messageToastService.shareMessage.next(
          {severity:'info', summary: 'Info', detail: 'system redirect Sign-In after 4s ..'}
        )
        let a = setTimeout(() => {
          this.router.navigateByUrl('/sign-in');
          clearTimeout(a)
        }, 4000);

      },
      Error=>{
        //console.log('oops',Error.error);
        this.messageToastService.shareMessage.next(
          {severity:'warn', summary: 'Warn', detail: `${Error.error}`}
        )
        let b = setTimeout(() => {
          this.messageToastService.shareMessage.next(
            {severity:'error', summary: 'Error', detail:'account registration failed !'}
          )
          clearTimeout(b);
        }, 4000);

      }
    )
  }
  onReject() {
      this.messageService.clear('signIn');
  }
  //-------
  ngOnDestroy(): void {
    this.subcript.unsubscribe();
  }

}
