import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry,tap,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  private Url = environment.URL;
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
      //return 'error status === 0';
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
        let resule = {Error:error.error}
      return [resule]
    }
    // return throwError(
    //   'Something bad happened; please try again later.');
    //return 'Something bad happened; please try again later.'
    let resule1 = {Error:'Something bad happened; please try again later'}
    return [resule1]
  }
  // get token user
  GetTokenUser(){
    let user:any='';
    if(localStorage.getItem('userLogin')){
      user = JSON.parse(localStorage.getItem('userLogin'))
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
         Authorization: 'my-auth-token'
      })
    };
    httpOptions.headers = httpOptions.headers.set('Authorization', `Bearer ${user.accessToken}`);
    return httpOptions;
  }
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
    const token = this.GetTokenUser();
    return this.http.put(`${this.Url}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,data,token).pipe(
      //catchError(this.handleError)
    )
  }
  //booking ticket movie
  BookingTicket(data:any):Observable<any>{
    const token = this.GetTokenUser();
    return this.http.post(`${this.Url}/QuanLyDatVe/DatVe`,data,token).pipe(
      //catchError(this.handleError)
    )
  }
  //get all user
  GetAllUsers():Observable<any>{
    return this.http.get(`${this.Url}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09`).pipe(

    )
  }
  //Delete User{
    DeleteUser(user:string):Observable<any>{
      const token = this.GetTokenUser();
      return this.http.delete(`${this.Url}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`,token).pipe(
        catchError(this.handleError)
      )
  }

}
