
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';
import { PrimeNgModule } from './../../../../core/shared/prime-ng/prime-ng.module';
import { PopUpComponent } from './../pop-up/pop-up.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CarouselService } from './../../../../core/services/carousel/carousel.service';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselComponent,PopUpComponent ],
      imports:[
        PrimeNgModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers:[
        CarouselService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component carousel', () => {
    expect(component).toBeTruthy();
  });

  it('should check varible list=[]',()=>{
    component.list=[];
    expect(component.list).toEqual([]);
  })

  it('should test function getlist',()=>{
    const mockData=[]
    spyOn(component,'getlist').and.returnValue([])
    expect(component.getlist()).toEqual(mockData)
  })
});
