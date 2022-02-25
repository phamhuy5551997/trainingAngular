import { PrimeNgModule } from './../../../../core/shared/prime-ng/prime-ng.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewTimeComponent } from './new-time.component';

describe('NewTimeComponent', () => {
  let component: NewTimeComponent;
  let fixture: ComponentFixture<NewTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTimeComponent ],
      imports:[HttpClientTestingModule,PrimeNgModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
