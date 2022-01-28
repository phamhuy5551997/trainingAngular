import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   let type1 = document.getElementById('headerClient');
    document.addEventListener("scroll",()=> {
      const scrolled = window.scrollY;
      console.log(scrolled);
      if(scrolled > 400){
        type1.style.background="#001";
      }else{
        type1.style.background="rgba(179, 179, 179,0.5)";
      }
    });
  }

}
