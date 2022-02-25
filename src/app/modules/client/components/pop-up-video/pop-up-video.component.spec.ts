import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopUpVideoComponent } from './pop-up-video.component';
import { SafePipe } from './../../../../core/pipes/custom-url/safe.pipe';
import { PrimeNgModule } from './../../../../core/shared/prime-ng/prime-ng.module';
import { BrowserModule,By } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('PopUpVideoComponent', () => {
  let component: PopUpVideoComponent;
  let fixture: ComponentFixture<PopUpVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpVideoComponent,SafePipe ],
      imports:[
        PrimeNgModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        HttpClientModule,
        RouterTestingModule,
        PrimeNgModule
      ],
      providers:[SafePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
