import { MovieService } from './../../../../core/services/movie/movie.service';
import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {MenuItem} from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit,DoCheck,OnDestroy {

  private subscrip:Subscription[]=[];
  private id:number=0;
  public dataChair:any="";
  public listChair:any="";
  public totalChair:number=160;
  public unBooked:number=160;
  public Booked:number=0;
  public Choosing:number=0;

  constructor(
    private movieService:MovieService,
    private activatedRoute:ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit(): void {
    let sub1 = this.activatedRoute.params.subscribe((params)=>{
      this.id = params.id
    })
    this.subscrip.push(sub1);
    this.getListChair();
  }
  //
  ngDoCheck(): void {
  }
  // get all chair
  getListChair(){
    this.movieService.GetListChair(this.id).subscribe(data=>{
      this.dataChair={...data}
      this.listChair=this.dataChair?.danhSachGhe;
      this.listChair?.forEach((el) => {
        if(el.daDat === true){
          this.Booked ++;
          this.unBooked --;
        }
      });
    })
  }
  // update chair
  isChairBook(value){
    this.listChair.forEach((el,i) => {
      if(el.maGhe === value.maGhe){
        if(el.dangChon){
          let isChair = {...value,dangChon:!el.dangChon}
          this.listChair.splice(i,1,isChair);
          this.Choosing --;
          this.unBooked ++;
        }else{
          let newChair = {...value,dangChon:true}
          this.listChair.splice(i,1,newChair)
          this.Choosing ++;
          this.unBooked --;
        }
      }
    });
  }
  //booking now
  onBooking(){
    let choose = this.listChair?.filter(item=> item.dangChon === true)
    console.log(choose);
  }
  //go back
  onGoback(){
    this.location.back();
  }
  //
  ngOnDestroy(): void {
    this.subscrip.forEach((sub,i)=>{
      sub.unsubscribe()
      console.log('destroy sub' + i );
    })
  }

}
