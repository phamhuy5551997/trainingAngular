import { Component, OnInit,Input,Output,EventEmitter,DoCheck } from '@angular/core';


@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.scss']
})
export class ChairComponent implements OnInit,DoCheck {
  @Input() chair:any;
  @Output() isChair:any = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  ngDoCheck(): void {

  }
  //event output chair
  isBooking(){
    this.isChair.emit(this.chair);
  }
}
