import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry,tap,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Url = environment.URL;
  constructor(private http:HttpClient) { }

  SignInUserAPI(data:any):Observable<any>{
   return this.http.post(`${this.Url}/QuanLyNguoiDung/DangKy`,data).pipe(
    //catchError(this.handleError)
   )
  }

  LoginUserAPI(data:any):Observable<any>{
    return this.http.post(`${this.Url}/QuanLyNguoiDung/DangNhap`,data).pipe()
  }
  

}
