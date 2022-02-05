import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  FormSignIn!:FormGroup;
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
        Validators.pattern('[03|05|07|09]+([0-9]{8})')
      ]]
    });
  }
  //----
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
  //----
  onSubmit(){
    console.log(this.FormSignIn);
    alert(JSON.stringify(this.FormSignIn.value))
  }

}
