import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    authService = TestBed.inject(AuthService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should API signUp user',()=>{
    let data ={}

    authService.SignInUserAPI(data).subscribe(res=>{
      //===
      expect(res).toEqual({status:200,text:'SignUp successfull'});
    })
    //=== fake data
    const url = environment.URL;
    const request = httpTestingController.expectOne(`${environment.URL}/QuanLyNguoiDung/DangKy`);
    request.flush({status:200,text:'SignUp successfull'});
  })
  //----test SignUp
  it('should faill error call api',()=>{
    let data={};
    const status = 500;
    const statusText = 'Server error';
    const errorEvent = new ErrorEvent('API error');
    let actionError:HttpErrorResponse| undefined;

    authService.SignInUserAPI(data).subscribe(
      ()=>{
        fail('next hander not be called')
      },
      (error)=>{
        actionError = error
      },
      ()=>{
        fail('complete hander not be called')
      }
    )

    const request = httpTestingController.expectOne(`${environment.URL}/QuanLyNguoiDung/DangKy`);
    request.error(
      errorEvent,
      {status,statusText}
    )
    if(!actionError){
      throw new Error('Error needs to be defined')
    }
    expect(actionError.error).toBe(errorEvent);
    expect(actionError.status).toBe(status);
    expect(actionError.statusText).toBe(statusText);
  })
  //----test user login
  it('should API Login User',()=>{
    let data ={}
    authService.LoginUserAPI(data).subscribe(res=>{
      //===
      expect(res).toEqual({status:200,text:'Login successfull'});
    })
    //=== fake data
    const url = environment.URL;
    const request = httpTestingController.expectOne(`${environment.URL}/QuanLyNguoiDung/DangNhap`);
    request.flush({status:200,text:'Login successfull'});
  })
  //----test getProfileUser
  it('should API GetProfile User',()=>{
    let data ={}
    authService.ProfileUserAPI(data).subscribe(res=>{
      //===
      expect(res).toEqual({status:200,text:'Get Profile successfull'});
    })
    //=== fake data
    const url = environment.URL;
    const request = httpTestingController.expectOne(`${environment.URL}/QuanLyNguoiDung/ThongTinTaiKhoan`);
    request.flush({status:200,text:'Get Profile successfull'});
  })
  //----test update user api
  it('should API Update User',()=>{
    let data ={}
    authService.UpdateProfileAPI(data).subscribe(res=>{
      //===
      expect(res).toEqual({status:200,text:'Update User successfull'});
    })
    //=== fake data
    const url = environment.URL;
    const request = httpTestingController.expectOne(`${environment.URL}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`);
    request.flush({status:200,text:'Update User successfull'});
  })

});
