import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user:any={taiKhoan:'anonymus'};
    if(localStorage.getItem('userLogin')){
      user = JSON.parse(localStorage.getItem('userLogin'));
      if(user.taiKhoan !== 'anonymus'){
        return false;
      }else{
        this.router.navigateByUrl('/')
        return true;
      }
    }
    this.router.navigateByUrl('/')
    return true;
  }

}
