import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  popUpEdit:boolean;
  user:any={taiKhoan:'anonymus'};
  userProfile:any="";
  ticket:any=[]
  first = 0;
  rows = 10;

  constructor(
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('userLogin')){
      this.user = JSON.parse(localStorage.getItem('userLogin'));
    }
    this.getProfile();
  }

  getProfile(){
    if(this.user !== 'anonymus'){
      const data = {
        "taiKhoan": this.user.taiKhoan
      }
      this.authService.ProfileUserAPI(data).subscribe(
        res=>{
          this.userProfile = {...res}
          this.ticket = [...res?.thongTinDatVe]
          //console.log(this.ticket);
        },
        Error=>{
          console.log(Error);
        }
      )
    }
  }

  next() {
    this.first = this.first + this.rows;
  }
  prev() {
      this.first = this.first - this.rows;
  }
  reset() {
      this.first = 0;
  }
  isLastPage(): boolean {
      return this.ticket ? this.first === (this.ticket.length - this.rows): true;
  }
  isFirstPage(): boolean {
      return this.ticket ? this.first === 0 : true;
  }
  //------------
  showMaximizableDialog(){
    this.popUpEdit =true;
  }

}
