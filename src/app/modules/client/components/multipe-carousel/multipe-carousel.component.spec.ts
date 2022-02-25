import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeNgModule } from './../../../../core/shared/prime-ng/prime-ng.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MultipeCarouselComponent } from './multipe-carousel.component';

describe('MultipeCarouselComponent', () => {
  let component: MultipeCarouselComponent;
  let fixture: ComponentFixture<MultipeCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipeCarouselComponent ],
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
    fixture = TestBed.createComponent(MultipeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
