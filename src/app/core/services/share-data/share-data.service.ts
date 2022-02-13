import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  shareData = new Subject();
  shareIdAddTime = new Subject();

  constructor() { }
}
