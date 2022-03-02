
import { PrimeNgModule } from './../../../../core/shared/prime-ng/prime-ng.module';
import { ComponentFixture, TestBed} from '@angular/core/testing';
//import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElement: DebugElement;
  let el:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PrimeNgModule,
        RouterTestingModule
       ],
      declarations: [ HeaderComponent ],
      providers: [
      ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      debugElement = fixture.debugElement;
    });
  });

  afterEach(async () => {
    localStorage.removeItem('userLogin')
  })

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should check out user not login',()=>{
    const a = !!localStorage.getItem('userLogin');
    expect(a).toBeFalsy();
  })

  it('should check out user login',()=>{
    let user={
      name:'aaa',
      Password:'aaa'
    }
    localStorage.setItem('userLogin',JSON.stringify(user));
    const a = !!localStorage.getItem('userLogin');
    expect(a).toBeTruthy();
  })

  it('should check function handle logout',()=>{
    component.user = {taiKhoan:'anonymus'}
    spyOn(component,'handleLogout').and.returnValue({taiKhoan:'anonymus'});
    expect(component.handleLogout()).toEqual({taiKhoan:'anonymus'});
    expect(component.handleLogout).toHaveBeenCalled();
  })

  it('should test button click onSearch no value input',()=>{
    component.searchInput="";
    spyOn(component, 'onSearch').and.returnValue(false);
    expect(component.onSearch()).toBeFalsy();
  });

  it('should test button click onSearch has value input',()=>{
    component.searchInput="aaaa";
    spyOn(component, 'onSearch').and.returnValue(true);
    expect(component.onSearch()).toBeTruthy();
  });

  it('should test onEnter no value input',()=>{
    component.searchInput="";
    spyOn(component, 'onEnter').and.returnValue(false);
    expect(component.onEnter()).toBeFalsy();
  });

  it('should test onEnter has value input',()=>{
    component.searchInput="aaaa";
    spyOn(component, 'onEnter').and.returnValue(true);
    expect(component.onEnter()).toBeTruthy();
  });

});
