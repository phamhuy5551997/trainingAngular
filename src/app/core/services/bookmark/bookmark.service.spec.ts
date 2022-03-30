import { TestBed } from '@angular/core/testing';

import { BookmarkService } from './bookmark.service';

describe('BookmarkService', () => {
  let service: BookmarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmarkService);
  });

  it('should be created service bookmark ', () => {
    expect(service).toBeTruthy();
  });

  it('should test function Getbookmark',()=>{
    spyOn(service,'GetBookmark').and.returnValue([]);
    expect(service.GetBookmark()).toEqual([]);
  })

  it('should test function ActionBookmark movie not bookmark',()=>{
    let fakeData = {maPhim:'1111',name:'unit test'}
    spyOn(service,'ActionBookmark').and.returnValue(1);
    expect(service.ActionBookmark(fakeData)).toEqual(1);
  })

  it('should test function ActionBookmark movie has bookmark',()=>{
    let fakeData = {maPhim:'1367',name:'unit test'};
    spyOn(service,'ActionBookmark').and.returnValue(-1);
    expect(service.ActionBookmark(fakeData)).toEqual(-1);
  })

  it('should test function delete bookmark',()=>{
    let id = 1367;
    spyOn(service,'DeleteBookmark').and.returnValue([]);
    expect(service.DeleteBookmark(id)).toEqual([]);
  })

});
