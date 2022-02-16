import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private router:Router,
    private location:Location,
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('userLogin')){
     let user = JSON.parse(localStorage.getItem('userLogin'));
      if(user.taiKhoan === 'anonymus'){
        return true;
      }else{
        this.router.navigateByUrl('/');
        return false;
      }
    }else{
      //this.location.back();
      return true;
    }
  }

}
