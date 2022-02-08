import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEditUserComponent } from './pop-up-edit-user.component';

describe('PopUpEditUserComponent', () => {
  let component: PopUpEditUserComponent;
  let fixture: ComponentFixture<PopUpEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpEditUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
