import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtTuan1Component } from './bt-tuan1.component';

describe('BtTuan1Component', () => {
  let component: BtTuan1Component;
  let fixture: ComponentFixture<BtTuan1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtTuan1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtTuan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
