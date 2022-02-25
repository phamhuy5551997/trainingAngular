import { PrimeNgModule } from 'src/app/core/shared/prime-ng/prime-ng.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule,By } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PopUpUserAdminComponent } from './pop-up-user-admin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PopUpUserAdminComponent', () => {
  let component: PopUpUserAdminComponent;
  let fixture: ComponentFixture<PopUpUserAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpUserAdminComponent ],
      imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        PrimeNgModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
