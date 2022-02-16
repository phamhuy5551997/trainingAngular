import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodter',
  templateUrl: './foodter.component.html',
  styleUrls: ['./foodter.component.scss']
})
export class FoodterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onOpen(){
    window.open("https://www.youtube.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100px,left=50px,width=600px,height=400px");
  }

}
