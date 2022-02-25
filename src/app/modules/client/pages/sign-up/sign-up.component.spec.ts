import { PrimeNgModule } from './../../../../core/shared/prime-ng/prime-ng.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule,By } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let de:DebugElement;
  let el:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        HttpClientModule,
        RouterTestingModule,
        PrimeNgModule
      ],
      providers:[
        AuthService,
      ]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(SignUpComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      de=fixture.debugElement.query(By.css('form'));
      el=de.nativeElement;
    });
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(SignUpComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create form SignUP test', () => {
    expect(component).toBeTruthy();
  });
  //
  it('should test form invalid',()=>{
    component.FormSignIn.controls['fullName'].setValue('');
    component.FormSignIn.controls['userName'].setValue('');
    component.FormSignIn.controls['password'].setValue('');
    component.FormSignIn.controls['email'].setValue('');
    component.FormSignIn.controls['numberPhone'].setValue('');
    expect(component.FormSignIn.valid).toBeFalsy();
  })
  //
  it('should test form valid',()=>{
    component.FormSignIn.controls['fullName'].setValue('aaaaa');
    component.FormSignIn.controls['userName'].setValue('aaaaa');
    component.FormSignIn.controls['password'].setValue('aaaaa');
    component.FormSignIn.controls['email'].setValue('aaaaaa');
    component.FormSignIn.controls['numberPhone'].setValue('aaaaa');
    expect(component.FormSignIn.valid).toBeFalsy();
  })
  //
  it('should submit SignUp user',()=>{
    const result = true;
    component.onConfirm();
    expect(component.signUpSuccessfull).toEqual(result);
  })

});
