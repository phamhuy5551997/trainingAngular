import { Component, OnInit,DoCheck } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { BookmarkService } from 'src/app/core/services/bookmark/bookmark.service';
import { LazyLoadEvent } from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [MessageService]
})
export class NavBarComponent implements OnInit,DoCheck {
  dataBookmark:any=[];
  numberData:number=0;
  displayBasic2:boolean;
  visibleUser:boolean;
  userLogin:boolean=false;
  movieDelete:any;

  first = 0;
  rows = 10;

  constructor(
    private bookmarkService:BookmarkService,
    private messageService: MessageService,
  ){}
  ngOnInit() {
    this.handleGetBookmark();
  }
  ngDoCheck(): void {
    this.handleGetBookmark();
  }
  //bookmark
  handleGetBookmark(){
    this.dataBookmark=[];
    let data = this.bookmarkService.GetBookmark();
    this.dataBookmark=[...data];
    this.numberData = data.length;
  }
  //delete-bookmark
  showConfirm(value:any) {
    this.movieDelete=value;
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'You Want To Delete ?', detail:`${value.tenPhim}`});
  }
  onConfirm() {
    this.messageService.clear('c');
    let data = this.bookmarkService.DeleteBookmark(this.movieDelete.maPhim);
    this.movieDelete = [];
    this.movieDelete = [...data];
    this.messageService.add({severity:'success', summary:'Delete Successfull', detail:`${this.movieDelete.tenPhim}`});
    this.movieDelete='';
  }
  onReject() {
    this.messageService.clear('c');
    this.movieDelete='';
  }
  //---------------
  showBasicDialog2(){
    this.displayBasic2 = true
  }

}
