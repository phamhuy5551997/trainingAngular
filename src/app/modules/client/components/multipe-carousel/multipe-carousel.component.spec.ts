import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipeCarouselComponent } from './multipe-carousel.component';

describe('MultipeCarouselComponent', () => {
  let component: MultipeCarouselComponent;
  let fixture: ComponentFixture<MultipeCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipeCarouselComponent ]
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
