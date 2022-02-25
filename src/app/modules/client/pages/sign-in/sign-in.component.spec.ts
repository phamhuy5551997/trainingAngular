import { PrimeNgModule } from './../../../../core/shared/prime-ng/prime-ng.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule,By } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let de:DebugElement;
  let el:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
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
      fixture = TestBed.createComponent(SignInComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      de=fixture.debugElement.query(By.css('form'));
      el=de.nativeElement;
    });;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test onsubmit SignIn',()=>{
    const user={
      "taiKhoan": 'aaaaaaaa',
      "matKhau": 'bbbbbbbbbbb'
    }
    component.onSubmit(user)
    expect(component.statusLogin).toBeTruthy();
  })

});
