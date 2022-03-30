import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashbored',
  templateUrl: './dashbored.component.html',
  styleUrls: ['./dashbored.component.scss']
})
export class DashboredComponent implements OnInit {
  databar?: any;
  data1:any=[];
  data2:any=[];
  constructor() {
  }
  ngOnInit(): void {
    this.onRanDom();
    this.databar = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','Deccember'],
      datasets: [
          {
              label: 'Movies dataset',
              backgroundColor: '#673AB7',
              data: this.data1
          },
          {
              label: 'Users dataset',
              backgroundColor: '#F03',
              data: this.data2
          }
      ]
    };
  }

  onRanDom(){
    for(let i =0;i<12;i++){
      let a = Math.floor(Math.random() * 30) + Math.floor(Math.random() * 30);
      this.data1.push(a)
    }
    for(let j =0;j<12;j++){
      let b = Math.floor(Math.random() * 30) + Math.floor(Math.random() * 30);
      this.data2.push(b)
    }
  }
}
