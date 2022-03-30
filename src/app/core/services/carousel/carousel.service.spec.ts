import { TestBed } from '@angular/core/testing';

import { CarouselService } from './carousel.service';

describe('CarouselService', () => {
  let service: CarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselService);
  });

  it('should be created service carousel', () => {
    expect(service).toBeTruthy();
  });

  it('should test function getListCarousel',()=>{
    let fakeData = [];
    spyOn(service,'getListCarousel').and.returnValue([]);
    expect(service.getListCarousel()).toEqual([]);
  })

});
