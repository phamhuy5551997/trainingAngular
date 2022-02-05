import { Component, OnInit,DoCheck } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit,DoCheck {

  constructor(
    private primengConfig: PrimeNGConfig,
    ) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
  }
  ngDoCheck(): void {

  }
}
