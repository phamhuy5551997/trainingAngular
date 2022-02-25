
import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/core/services/movie/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit,OnDestroy {
  public Data1:any=[];
  public Data2:any=[];
  page: 0;
  total:number=0;
  private subscrip:Subscription;
  inputSearch:string='';
  constructor(
    private activatedRoute:ActivatedRoute,
    private movieService:MovieService,
  ) { }

  ngOnInit(): void {
    this.subscrip = this.activatedRoute.params.subscribe((param)=>{
      let search = param.tag?.trim().replace(" ", "-");
      this.inputSearch = search;
    })
    this.getMovieAll();
  }

  getMovieAll(){
    this.movieService.GetAllMoviesHttp().subscribe(data=>{
      this.total = data.length;
      this.Data1 = [...data];
      if(this.inputSearch === 'all'){
        this.Data2 = [...data]
      }else{
        this.onFilter(this.inputSearch);
      }
    })
  }

  onFilter(value:string){
    this.Data2=[];
    let Datatemp = [...this.Data1];
    Datatemp?.filter(item => {
      if(item.biDanh.indexOf(value.toLowerCase()) !== -1){
        this.Data2.push(item)
      }
    });
    //console.log(this.Data2);
  }

  onSearch(value:string){
    if(value.length === 0){
      this.Data2 = [];
      this.Data2=[...this.Data1];
    }else{
      this.onFilter(value.trim().replace(" ", "-"));
    }
  }

  ngOnDestroy(): void {
    this.subscrip.unsubscribe();
  }
}
