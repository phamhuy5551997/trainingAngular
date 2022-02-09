import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pop-up-video',
  templateUrl: './pop-up-video.component.html',
  styleUrls: ['./pop-up-video.component.scss']
})
export class PopUpVideoComponent implements OnInit {

  @Input() dataPopUp:any

  displayMaximizable: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  showMaximizableDialog(){
    this.displayMaximizable = true
  }

}
