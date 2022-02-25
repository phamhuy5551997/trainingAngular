import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeNgModule } from './../../../../core/shared/prime-ng/prime-ng.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PopUpComponent } from './pop-up.component';

describe('PopUpComponent', () => {
  let component: PopUpComponent;
  let fixture: ComponentFixture<PopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpComponent ],
      imports:[
        PrimeNgModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers:[]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
