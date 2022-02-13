import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-time',
  templateUrl: './new-time.component.html',
  styleUrls: ['./new-time.component.scss']
})
export class NewTimeComponent implements OnInit {
  date:string='';
  ArrTheater:any;
  theater:string='';
  constructor() {
    this.ArrTheater = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

  ngOnInit(): void {
  }

  onClick(){
    console.log(this.theater)
    console.log(this.date)
  }

}
