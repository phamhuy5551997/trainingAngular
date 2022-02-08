import { MovieService } from './../../../../core/services/movie/movie.service';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
    private router:Router
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
    this.movieService.GetMovieDetail(this.id).subscribe(
      data=>{
        this.movie={...data}
      },
      Error=>{
        setTimeout(() => {
          this.router.navigateByUrl('/notfound404')
        }, 4000);
      }
    )
  }

  ngOnDestroy(): void {
      this.subscrip.forEach((sub,i)=>{
        sub.unsubscribe()
        //console.log('destroy sub' + i );
      })
  }
}
