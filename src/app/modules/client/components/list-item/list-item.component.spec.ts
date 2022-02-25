import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListItemComponent } from './list-item.component';
import { PrimeNgModule } from './../../../../core/shared/prime-ng/prime-ng.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemComponent ],
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
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
