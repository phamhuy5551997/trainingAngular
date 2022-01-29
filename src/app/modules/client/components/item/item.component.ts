import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [MessageService]
})
export class ItemComponent implements OnInit {
  val:number=3;
  @Input() movie;
  @Output() movieOut = new EventEmitter();
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

  }
  addStore(){
    this.movieOut.emit(this.movie);
  }

}
