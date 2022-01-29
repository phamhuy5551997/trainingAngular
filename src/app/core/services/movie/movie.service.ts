import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry,tap,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private Url = environment.URL;
  private ListMovie:any = [];
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  constructor(private http:HttpClient) { }

  GetAllMoviesHttp():Observable<any>{
    return  this.http.get(`${this.Url}/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`).pipe(
      // map(data=>{
      //    console.log(data);
      // }),
      catchError(this.handleError)
    )
  }
}
