import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu'; // no
import {MenubarModule} from 'primeng/menubar'; // no
import {InputTextModule} from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import {SidebarModule} from 'primeng/sidebar';
import {CarouselModule} from 'primeng/carousel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {DialogModule} from 'primeng/dialog';
import {MenuModule} from 'primeng/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule,
    ButtonModule,
    TabMenuModule,
    MenubarModule,
    InputTextModule,
    RippleModule,
    SidebarModule,
    CarouselModule,
    ScrollTopModule,
    DialogModule,
    MenuModule,
  ],
  exports:[
    AccordionModule,
    ButtonModule,
    TabMenuModule,
    MenubarModule,
    InputTextModule,
    RippleModule,
    SidebarModule,
    CarouselModule,
    ScrollTopModule,
    DialogModule,
    MenuModule,
  ]
})
export class PrimeNgModule { }
