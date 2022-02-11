import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie/movie.service';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class AddMovieComponent implements OnInit {

  public listAll:any=[];
  public listFill:any=[];
  searchFilter:string="";
  CreateMovie:boolean;
  editMovie:boolean;
  addTimeMovie:boolean;
  idDelete:number=0;
  constructor(
    private movieService:MovieService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.getAllMovie();
  }
  getAllMovie(){
    this.movieService.GetAllMoviesHttp().subscribe(data=>{
      this.listAll = [...data];
      //console.log(this.listAll);
    })
  }
  onChange(){
    this.listFill=[];
    let txt2 = this.searchFilter.trim().toLocaleLowerCase().replace(/[#_@$*!?><~"'`]/g,'');
    let txt1 = txt2.replace(/\s\s+/g,' ');
    let txt = txt1.replace(/\s/g,'-');
    //console.log(txt);
    this.listAll?.filter(item=>{
      if(item.biDanh.indexOf(txt) !== -1){
        this.listFill.push(item);
      }
    })
  }
  showAddMovie(){
    this.CreateMovie = true;
  }
  showEditMovie(){
    this.editMovie = true;
  }
  showAddTime(){
    this.addTimeMovie = true;
  }
  ondelete(id){
    this.idDelete = id
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete Movie ?',
      accept: () => {
        this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
      },
      reject: (type) => {
          switch(type) {
              case ConfirmEventType.REJECT:
                  this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
              break;
          }
      }
    });
  }
}
