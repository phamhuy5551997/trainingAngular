import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry,tap,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private Url = environment.URL;
  //private ListMovie:any = [];
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      const rel = {Error:error.error};
      return [rel];
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  constructor(private http:HttpClient) { }
  //get all movie
  GetAllMoviesHttp():Observable<any>{
    return  this.http.get(`${this.Url}/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`).pipe(
      //catchError(this.handleError)
    )
  }
  //get movie detail
  GetMovieDetail(id:number):Observable<any>{
    return this.http.get(`${this.Url}/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`).pipe(
      //catchError(this.handleError)
    )
  }
  //get List chair api
  GetListChair(id:number):Observable<any>{
    return this.http.get(`${this.Url}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`).pipe(
      //catchError(this.handleError)
    )
  }
  //upload new movie
  UploadMovieAPI(data:any):Observable<any>{
   return this.http.post(`${this.Url}/QuanLyPhim/ThemPhimUploadHinh`,data).pipe(
      catchError(this.handleError)
    )
  }
  // get token user
  GetTokenUser(){
    let user:any='';
    if(localStorage.getItem('userLogin')){
      user = JSON.parse(localStorage.getItem('userLogin'))
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
         Authorization:'my-auth-token'
      })
    };
    httpOptions.headers = httpOptions.headers.set('Authorization', `Bearer ${user.accessToken}`);
    return httpOptions;
  }
  //update movie API
  UpdateMovieAPI(data:any):Observable<any>{
    const token = this.GetTokenUser();
    //console.log(token)
    return this.http.post(`${this.Url}/QuanLyPhim/CapNhatPhimUpload`,data,token).pipe(
      catchError(this.handleError)
    )
  }
  //Delete movie
  DeleteMovieAPI(id:number):Observable<any>{
    const token = this.GetTokenUser();
    return this.http.delete(`${this.Url}/QuanLyPhim/XoaPhim?MaPhim=${id}`,token).pipe(
      catchError(this.handleError)
    )
  }
  // Add new showTime
  NewShowTime(data:any){
    const token = this.GetTokenUser();
    return this.http.post(`${this.Url}QuanLyDatVe/TaoLichChieu`,data,token).pipe(
      catchError(this.handleError)
    )
  }

}
