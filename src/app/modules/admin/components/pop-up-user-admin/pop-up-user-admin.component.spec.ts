import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpUserAdminComponent } from './pop-up-user-admin.component';

describe('PopUpUserAdminComponent', () => {
  let component: PopUpUserAdminComponent;
  let fixture: ComponentFixture<PopUpUserAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpUserAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
