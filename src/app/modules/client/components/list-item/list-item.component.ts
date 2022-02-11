import { BookmarkService } from './../../../../core/services/bookmark/bookmark.service';
import { MovieService } from './../../../../core/services/movie/movie.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  providers: [MessageService]
})
export class ListItemComponent implements OnInit,OnDestroy {

  constructor(
    private movieService:MovieService,
    private messageService: MessageService,
    private bookmarkService:BookmarkService,
  ){ }

  public listMovie:any=[];
  private subscript = new Subscription
  public page: number = 1;
  data:any=[];
  dataTemp:any=[];

  ngOnInit(): void {
    this.getALLMovie();
    //console.log(this.listMovie);
    if(localStorage.getItem('bookmark-movie')){
      let data1 = JSON.parse(localStorage.getItem('bookmark-movie'));
      this.data = [...data1];
    }
  }
  //get all movie
  getALLMovie(){
   this.listMovie=[];
   this.subscript = this.movieService.GetAllMoviesHttp().subscribe((data)=>{
      this.listMovie=[...data]
    })
  }
  //bookmark service
  eventBookmark(dataMovie){
    const resule = this.bookmarkService.ActionBookmark(dataMovie)
    if(resule === 1){
      this.messageService.add({severity:'info', life:7000 , summary: 'Add Movie Success', detail: `Bookmark ${dataMovie.tenPhim} `});
    }else if(resule === -1){
      this.messageService.add({severity:'warn', life:7000 , summary: `Archived Movie Bookmark !!`,
      detail:`${dataMovie.tenPhim}`});
    }
  }
  //destroy component
  ngOnDestroy(): void {
    this.subscript.unsubscribe();
  }

}

    // if(this.data.length > 0){
    //   this.data.forEach((item,i)=>{
    //     if(item.maPhim === dataMovie.maPhim){
    //       this.dataTemp.push(item)
    //     }
    //   })
    //   if(this.dataTemp.length > 0){
    //     this.dataTemp=[];
    //     this.messageService.add({severity:'warn', life:7000 , summary: 'Archived Movie Bookmark !!'});
    //   }else{
    //     this.data.push(dataMovie);
    //     localStorage.setItem('bookmark-movie',JSON.stringify(this.data));
    //     this.messageService.add({severity:'info', life:7000 , summary: 'Add Movie Success', detail: `Bookmark ${dataMovie.tenPhim} `});
    //   }
    // }else{
    //   this.data.push(dataMovie);
    //   localStorage.setItem('bookmark-movie',JSON.stringify(this.data))
    //   this.messageService.add({severity:'info', life:7000 , summary: 'Add Movie Success', detail: `Bookmark ${dataMovie.tenPhim} `});
    // }
