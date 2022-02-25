import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Com404Component } from './com404.component';

describe('Com404Component', () => {
  let component: Com404Component;
  let fixture: ComponentFixture<Com404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Com404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Com404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

});
