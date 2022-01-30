import { Component, OnInit,DoCheck } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { BookmarkService } from 'src/app/core/services/bookmark/bookmark.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit,DoCheck {
  dataBookmark:any=[];
  numberData:number=0;
  displayBasic2:boolean;
  visibleUser:boolean;
  userLogin:boolean=false;

  first = 0;
  rows = 10;

  constructor(private bookmarkService:BookmarkService) {}

  ngOnInit() {
    this.handleGetBookmark();
  }

  ngDoCheck(): void {
    this.handleGetBookmark();
  }

  handleGetBookmark(){
    this.dataBookmark=[];
    let data = this.bookmarkService.GetBookmark();
    this.dataBookmark=[...data];
    this.numberData = data.length;
  }

  showBasicDialog2(){
    this.displayBasic2 = true
  }


}
