import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  user:any={taiKhoan:'anonymus'}
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('userLogin')){
      this.user= JSON.parse(localStorage.getItem('userLogin'));
    }
  }

}
