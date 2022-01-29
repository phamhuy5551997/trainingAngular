import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  items: MenuItem[];
  displayBasic2:boolean;
  visibleUser:boolean;
  userLogin:boolean=false;

  constructor() {}

  ngOnInit() {


  }

  update() {
    alert('update')
  }

  delete() {
    alert('delete')
  }

  showBasicDialog2(){
    this.displayBasic2 = true
  }

}
