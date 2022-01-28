import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  @Input() dataPopUp:any

  displayMaximizable: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  showMaximizableDialog(){
    this.displayMaximizable = true
  }

}
