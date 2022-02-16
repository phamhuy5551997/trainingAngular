// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-pop-up-user-admin',
//   templateUrl: './pop-up-user-admin.component.html',
//   styleUrls: ['./pop-up-user-admin.component.scss']
// })
// export class PopUpUserAdminComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }



import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MessageToastService } from 'src/app/core/services/message/message.service';
@Component({
  selector: 'app-pop-up-user-admin',
  templateUrl: './pop-up-user-admin.component.html',
  styleUrls: ['./pop-up-user-admin.component.scss'],
  providers: [MessageService]
})
export class PopUpUserAdminComponent implements OnInit,OnDestroy {
  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageToastService:MessageToastService
    ) { }
  FormSignUpAdmin!:FormGroup;
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
    this.FormSignUpAdmin =this.fb.group({
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
    return this.FormSignUpAdmin.get('fullName');
  }
  get userName(){
    return this.FormSignUpAdmin.get('userName');
  }
  get password(){
    return this.FormSignUpAdmin.get('password');
  }
  get email(){
    return this.FormSignUpAdmin.get('email');
  }
  get numberPhone(){
    return this.FormSignUpAdmin.get('numberPhone');
  }
  //------
  onSubmit(){
    this.messageService.clear();
    this.messageService.add({key:'new-user', sticky: true, severity:'warn', summary:'Are you new user ?', detail:'Confirm to proceed'});
  }
  //-------
  onConfirm() {
    this.messageService.clear('new-user');
    const dataSignIn = {
      "taiKhoan": this.FormSignUpAdmin.get('userName').value,
      "matKhau": this.FormSignUpAdmin.get('password').value,
      "email": this.FormSignUpAdmin.get('email').value,
      "soDt": this.FormSignUpAdmin.get('numberPhone').value,
      "maNhom": "GP09",
      "maLoaiNguoiDung": "QuanTri",
      "hoTen": this.FormSignUpAdmin.get('fullName').value
    }
    this.messageToastService.shareMessage.next(
      {severity:'info', summary: 'Info', detail: 'The system is processing registration, please wait...'}
    )
    this.subcript = this.authService.SignInUserAPI(dataSignIn).subscribe(
      data=>{
      //console.log('success',data);
        this.messageToastService.shareMessage.next(
          { severity:'success', summary: 'Success', detail: 'Add new user successfull !'}
        )
        this.messageToastService.shareMessage.next(
          {severity:'info', summary: 'Info', detail: 'system reload after 5s ..'}
        )
        let a = setTimeout(() => {
          window.location.reload()
          clearTimeout(a)
        }, 5000);

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
        }, 2000);
      }
    )
  }
  onReject() {
      this.messageService.clear('new-user');
  }
  //-------
  ngOnDestroy(): void {
    this.subcript.unsubscribe();
  }

}
