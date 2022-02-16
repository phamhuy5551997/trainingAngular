import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('userLogin')){
        let user = JSON.parse(localStorage.getItem('userLogin'));
         if(user?.taiKhoan === 'anonymus'){
           this.router.navigateByUrl('/');
           return false;
         }else{
          if(user?.maLoaiNguoiDung === 'QuanTri'){
            return true
          }else{
            this.router.navigateByUrl('/');
            return false;
          }
         }
       }else{
         this.router.navigateByUrl('/');
         return false;
       }
  }

}
