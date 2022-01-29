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
import {CardModule} from 'primeng/card';
import {RatingModule} from 'primeng/rating';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {NgxPaginationModule} from 'ngx-pagination';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {TooltipModule} from 'primeng/tooltip';

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
    CardModule,
    RatingModule,
    TableModule,
    PaginatorModule,
    NgxPaginationModule,
    SplitButtonModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    TooltipModule,
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
    CardModule,
    RatingModule,
    TableModule,
    PaginatorModule,
    NgxPaginationModule,
    SplitButtonModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    TooltipModule,
  ]
})
export class PrimeNgModule { }
