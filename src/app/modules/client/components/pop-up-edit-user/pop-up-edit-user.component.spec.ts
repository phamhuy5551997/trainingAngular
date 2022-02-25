import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopUpEditUserComponent } from './pop-up-edit-user.component';
import { PrimeNgModule } from './../../../../core/shared/prime-ng/prime-ng.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule,By } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PopUpEditUserComponent', () => {
  let component: PopUpEditUserComponent;
  let fixture: ComponentFixture<PopUpEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpEditUserComponent ],
      imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        HttpClientModule,
        RouterTestingModule,
        PrimeNgModule
      ],
      providers:[]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
