import { MovieService } from './../../../../core/services/movie/movie.service';
import { BookmarkService } from './../../../../core/services/bookmark/bookmark.service';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-multipe-carousel',
  templateUrl: './multipe-carousel.component.html',
  styleUrls: ['./multipe-carousel.component.scss'],
  providers: [MessageService]
})
export class MultipeCarouselComponent implements OnInit,OnDestroy {
  listAll:any=[];
  listAll1:any=[];
	responsiveOptions;
  subscipt:Subscription;
  constructor(
    private movieService :MovieService,
    private messageService: MessageService,
    private bookmarkService:BookmarkService,
    ) {
    this.responsiveOptions = [
      {
          breakpoint: '1025px',
          numVisible: 4,
          numScroll: 1
      },
      {
          breakpoint: '992px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '560px',
          numVisible: 2,
          numScroll: 1
      },
      {
        breakpoint: '400px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(){
    this.subscipt = this.movieService.GetAllMoviesHttp().subscribe(data=>{
      this.listAll =[...data];
      this.randomMovie();
    })
  }

  randomMovie(){
    let a = Math.floor(Math.random() * 10);
    this.listAll1=this.listAll.slice(a, a+16)
  }

  bookmark(dataMovie){
    const resule = this.bookmarkService.ActionBookmark(dataMovie);
    if(resule === 1){
      this.messageService.add({severity:'info', life:7000 , summary: 'Add Movie Success', detail: `Bookmark ${dataMovie.tenPhim} `});
    }else if(resule === -1){
      this.messageService.add({severity:'warn', life:7000 , summary: `Archived Movie Bookmark !!`,
      detail:`${dataMovie.tenPhim}`});
    }
  }

  ngOnDestroy(): void {
      this.subscipt.unsubscribe();
  }

}
