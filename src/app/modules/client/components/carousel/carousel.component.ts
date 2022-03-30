import { CarouselService } from './../../../../core/services/carousel/carousel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  list:any=[];
  itemActive:any;

  constructor(private carouselService:CarouselService) { }

  ngOnInit(): void {
    this.getlist();
    //console.log(this.list);
    let data1 = this.list.shift();
    this.itemActive= data1
    //console.log(this.itemActive);
  }
  getlist(){
    let data = this.carouselService.getListCarousel();
    this.list = [...data]
    return [];
  }

}
