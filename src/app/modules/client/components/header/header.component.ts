import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  visibleSidebar1;
  searchInput:string="";
  user:any={taiKhoan:'anonymus'};
  statusSearch:boolean = false; // unit test
  constructor(private router:Router) { }

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
    }, 500);
    return {}
  }

  onSearch(){
    if(this.searchInput === ""){
      this.router.navigateByUrl(`/search/all`);
      return this.statusSearch = false;
    }else{
      this.router.navigateByUrl(`/search/${this.searchInput}`);
      return this.statusSearch =true;
    }
  }

  onEnter(){
    if(this.searchInput === ""){
      this.router.navigateByUrl(`/search/all`)
      return this.statusSearch = false;
    }else{
      let txt2 = this.searchInput.trim().toLocaleLowerCase().replace(/[#_@$*!?><~"'`]/g,'');
      let txt1 = txt2.replace(/\s\s+/g,' ');
      let txt = txt1.replace(/\s/g,'-');
      this.router.navigateByUrl(`/search/${txt}`)
      return this.statusSearch =true;
    }
  }

}
