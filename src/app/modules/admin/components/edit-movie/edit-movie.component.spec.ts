import { PrimeNgModule } from './../../../../core/shared/prime-ng/prime-ng.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EditMovieComponent } from './edit-movie.component';

describe('EditMovieComponent', () => {
  let component: EditMovieComponent;
  let fixture: ComponentFixture<EditMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMovieComponent ],
      imports:[HttpClientTestingModule,PrimeNgModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
