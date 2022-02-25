
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeNgModule } from './../../../../core/shared/prime-ng/prime-ng.module';
import { PopUpComponent } from './../pop-up/pop-up.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailItemComponent } from './detail-item.component';
import { LoadingComponent } from './../loading/loading.component';

describe('DetailItemComponent', () => {
  let component: DetailItemComponent;
  let fixture: ComponentFixture<DetailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailItemComponent,LoadingComponent ],
      imports:[
        PrimeNgModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
