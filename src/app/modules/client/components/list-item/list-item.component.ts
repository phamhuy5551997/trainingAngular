import { MovieService } from './../../../../core/services/movie/movie.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit,OnDestroy {
  public listMovie:any=[];
  private subscript = new Subscription
  public page: number = 1;

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.getALLMovie();
    console.log(this.listMovie);
  }

  getALLMovie(){
   this.listMovie=[];
   this.subscript = this.movieService.GetAllMoviesHttp().subscribe((data)=>{
      this.listMovie=[...data]
    })
  }

  ngOnDestroy(): void {
    this.subscript.unsubscribe();
  }

}
