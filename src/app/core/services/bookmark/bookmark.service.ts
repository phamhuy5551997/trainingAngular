import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor() { }

  private data:any=[];
  private dataTemp:any=[];

  ActionBookmark(dataMovie){
    if(localStorage.getItem('bookmark-movie')){
      let data1 = JSON.parse(localStorage.getItem('bookmark-movie'));
      this.data = [...data1];
    }

    if(this.data.length > 0){
      this.data.forEach((item,i)=>{
        if(item.maPhim === dataMovie.maPhim){
          this.dataTemp.push(item)
        }
      })
      if(this.dataTemp.length > 0){
        this.dataTemp=[];
        return -1;
        //this.messageService.add({severity:'warn', life:7000 , summary: 'Archived Movie Bookmark !!'});
      }else{
        this.data.push(dataMovie);
        localStorage.setItem('bookmark-movie',JSON.stringify(this.data));
        return 1;
        //this.messageService.add({severity:'info', life:7000 , summary: 'Add Movie Success', detail: `Bookmark ${dataMovie.tenPhim} `});
      }
    }else{
      this.data.push(dataMovie);
      localStorage.setItem('bookmark-movie',JSON.stringify(this.data));
      return 1;
      //this.messageService.add({severity:'info', life:7000 , summary: 'Add Movie Success', detail: `Bookmark ${dataMovie.tenPhim} `});
    }
  }

  GetBookmark(){
    let dataBookmark:any=[];
    if(localStorage.getItem('bookmark-movie')){
      let data1 = JSON.parse(localStorage.getItem('bookmark-movie'));
      dataBookmark = [...data1];
    }
    return dataBookmark;
  }

  DeleteBookmark(id:number){
    let dataBookmark:any=[];
    if(localStorage.getItem('bookmark-movie')){
      let data1 = JSON.parse(localStorage.getItem('bookmark-movie'));
      dataBookmark = [...data1];
    }
    let data2 = dataBookmark?.filter(item=>item.maPhim !== id);
    localStorage.setItem('bookmark-movie',JSON.stringify(data2));
    return data2;
    //console.log(data2);
    //return dataBookmark;
  }
}
