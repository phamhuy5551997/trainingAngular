import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {
  styleNav:any={
    'width': '15rem',
    'background-color': '#fff',
    'text-align': 'left'
  }
  adminSideBar:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}