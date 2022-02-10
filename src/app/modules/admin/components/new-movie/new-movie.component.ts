import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit {
  date1:string;
  constructor() { }

  ngOnInit(): void {
  }
  test(){

   let a = moment(this.date1).format('DD-MM-yyyy hh:mm:ss');
    console.log(Date.parse(this.date1).toString())
    console.log(this.date1)
    console.log(this.date1)
    console.log('a', a)
  }

}
