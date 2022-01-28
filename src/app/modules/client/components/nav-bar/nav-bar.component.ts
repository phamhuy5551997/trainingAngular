import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  items: MenuItem[];
  displayBasic2:boolean;

  constructor() {}

  ngOnInit() {
      this.items = [{
          label: 'Options',
          items: [{
              label: 'Update',
              icon: 'pi pi-refresh',
              command: () => {
                  this.update();
              }
          },
          {
              label: 'Delete',
              icon: 'pi pi-times',
              command: () => {
                  this.delete();
              }
          }
          ]},
          {
              label: 'Navigate',
              items: [{
                  label: 'Angular',
                  icon: 'pi pi-external-link',
                  url: 'http://angular.io'
              },
              {
                  label: 'Router',
                  icon: 'pi pi-upload',
                  routerLink: '/fileupload'
              }
          ]}
      ];
  }

  update() {
    alert('update')
  }

  delete() {
    alert('delete')
  }

  showBasicDialog2(){
    this.displayBasic2 = true
  }

}
