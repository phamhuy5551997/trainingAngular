import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private listCarousel:any=[
    {id:1,tolink:555,img:"c1"},
    {id:2,tolink:556,img:"c2"},
    {id:3,tolink:557,img:"c3"},
    {id:4,tolink:558,img:"c4"},
    {id:5,tolink:559,img:"c5"},
    {id:6,tolink:560,img:"c6"},
    {id:7,tolink:561,img:"c7"},
  ]

  getListCarousel(){
    return this.listCarousel
  }

  constructor() { }
}
