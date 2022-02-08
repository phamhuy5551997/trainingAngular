import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private listCarousel:any=[
    {id:1,tolink:555,img:"c1",video:"trailer1"},
    {id:2,tolink:556,img:"c2",video:"trailer2"},
    {id:3,tolink:557,img:"c3",video:"trailer3"},
    {id:4,tolink:558,img:"c4",video:"trailer4"},
    {id:5,tolink:559,img:"c5",video:"trailer5"},
    {id:6,tolink:560,img:"c6",video:"trailer6"},
    {id:7,tolink:561,img:"c7",video:"trailer7"}
  ]

  getListCarousel(){
    return this.listCarousel
  }

  constructor() { }
}
