import { MovieService } from './../../../../core/services/movie/movie.service';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit,OnDestroy {

  private subscrip:Subscription[]=[];
  private id:number=0;
  public movie:any={};

  constructor(
    private movieService:MovieService,
    private activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.movie = {name:'anonymus'};
    let sub1 = this.activatedRoute.params.subscribe((params)=>{
      this.id = params.id
    })
    this.subscrip.push(sub1)
    this.getMovieDetail();
  }

  getMovieDetail(){
    this.movieService.GetMovieDetail(this.id).subscribe(data=>{
      //console.log(data);
      this.movie={...data}
      //console.log(this.movie);
    })
  }

  ngOnDestroy(): void {
      this.subscrip.forEach((sub,i)=>{
        sub.unsubscribe()
        //console.log('destroy sub' + i );
      })
  }
}
