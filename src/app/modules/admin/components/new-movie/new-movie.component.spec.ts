import { PrimeNgModule } from './../../../../core/shared/prime-ng/prime-ng.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewMovieComponent } from './new-movie.component';

describe('NewMovieComponent', () => {
  let component: NewMovieComponent;
  let fixture: ComponentFixture<NewMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMovieComponent ],
      imports:[HttpClientTestingModule,PrimeNgModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
