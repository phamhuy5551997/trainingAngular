import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ShareDataService } from 'src/app/core/services/share-data/share-data.service';
import { MessageToastService } from 'src/app/core/services/message/message.service';
import { MovieService } from 'src/app/core/services/movie/movie.service';
@Component({
  selector: 'app-new-time',
  templateUrl: './new-time.component.html',
  styleUrls: ['./new-time.component.scss']
})
export class NewTimeComponent implements OnInit {
  date:string='';
  movie:any='';
  ArrTheater:any=[
    {name: 'CGV Aeon Binh Tan', code: 511},
    {name: 'CGV Aeon Tan Phu', code: 521},
    {name: 'CGV Binh Thanh', code: 531},
    {name: 'GCV Quan 7', code: 541},
    {name: 'CGV Tan Binh', code: 551},
    {name: 'CGV Nguyen Trai', code: 561},
    {name: 'CGV Hoang Van Thu', code: 571},
    {name: 'CGV Hung Vuong Plaza', code: 581}
  ];
  theater:any='';
  constructor(
    private shareDataService:ShareDataService,
    private messageToastService:MessageToastService,
    private movieService:MovieService
    ) {
    this.shareDataService.shareIdAddTime.subscribe(data=>{
      this.movie = data
    })
  }

  ngOnInit(): void {
  }

  onAddMovie(){
    if(this.theater && this.date){
      let dateFomat = moment(this.date).format('DD-MM-yyyy hh:mm:ss');
      let data={
        "maPhim": this.movie.maPhim,
        "ngayChieuGioChieu": dateFomat,
        "maRap": this.theater.code,
        "giaVe": 75000
      }
      console.log(data)
      // this.messageToastService.shareMessage.next(
      //   {severity:'info', summary: 'Info', detail: 'Add Showtime successful'}
      // )
      this.movieService.NewShowTime(data).subscribe(res=>{
        if(res.Error){
          if(res.Error.text){
            this.messageToastService.shareMessage.next(
              {severity:'info', summary: 'Info', detail: `${res.Error.text}`}
            )
          }else{
            this.messageToastService.shareMessage.next(
              {severity:'error', summary: 'Error', detail: `${res.Error}`}
            )
          }
        }
      })
    }else{
      this.messageToastService.shareMessage.next(
        {severity:'warn', summary: 'Warn', detail: 'Please do not leave it blank'}
      )
    }
  }

}
