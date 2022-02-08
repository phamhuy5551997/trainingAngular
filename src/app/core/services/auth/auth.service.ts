import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry,tap,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Url = environment.URL;
  constructor(private http:HttpClient) { }
  // sign-up user
  SignInUserAPI(data:any):Observable<any>{
   return this.http.post(`${this.Url}/QuanLyNguoiDung/DangKy`,data).pipe(
    //catchError(this.handleError)
   )
  }
  // sign-in user-login
  LoginUserAPI(data:any):Observable<any>{
    return this.http.post(`${this.Url}/QuanLyNguoiDung/DangNhap`,data).pipe()
  }
  // get profile user
  ProfileUserAPI(data:any):Observable<any>{
    return this.http.post(`${this.Url}/QuanLyNguoiDung/ThongTinTaiKhoan`,data).pipe()
  }
  // update profile user
  UpdateProfileAPI(data:any):Observable<any>{
    let user:any='';
    if(localStorage.getItem('userLogin')){
      user = JSON.parse(localStorage.getItem('userLogin'))
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    httpOptions.headers = httpOptions.headers.set('Authorization', `Bearer ${user.accessToken}`);
    return this.http.put(`${this.Url}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,data,httpOptions)
  }

}
