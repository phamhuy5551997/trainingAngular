import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeNgModule } from 'src/app/core/shared/prime-ng/prime-ng.module';
import { HeaderAdminComponent } from './header-admin.component';
import {CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA} from '@angular/core';

describe('HeaderAdminComponent', () => {
  let component: HeaderAdminComponent;
  let fixture: ComponentFixture<HeaderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAdminComponent ],
      imports:[PrimeNgModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
