import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  visibleSidebar1;
  user:any={taiKhoan:'anonymus'}
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('userLogin')){
      this.user = JSON.parse(localStorage.getItem('userLogin'));
    }
  }

  handleLogout(){
    this.user={taiKhoan:'anonymus'}
    localStorage.setItem('userLogin',JSON.stringify(this.user))
    const a = setTimeout(() => {
      window.location.reload()
    }, 1000);
  }

}
