import { PrimeNgModule } from './../../../../core/shared/prime-ng/prime-ng.module';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { Location } from '@angular/common';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElement: DebugElement;
  let el:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule,PrimeNgModule ],
      declarations: [ HeaderComponent ],
      providers: [ /*… */ ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      debugElement = fixture.debugElement;
    });
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HeaderComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   debugElement = fixture.debugElement;
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
