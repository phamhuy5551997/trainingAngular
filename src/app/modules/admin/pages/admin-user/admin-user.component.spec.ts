import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrimeNgModule } from 'src/app/core/shared/prime-ng/prime-ng.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AdminUserComponent } from './admin-user.component';

describe('AdminUserComponent', () => {
  let component: AdminUserComponent;
  let fixture: ComponentFixture<AdminUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserComponent ],
      imports:[
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientTestingModule,
        PrimeNgModule
      ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
