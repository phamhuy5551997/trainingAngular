import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './client-component/home/home.component';
import { BannerComponent } from './client-component/banner/banner.component';
import { ItemComponent } from './client-component/item/item.component';
import { CardComponent } from './client-component/card/card.component';
import { ProfileComponent } from './client-component/profile/profile.component';
import { HeaderComponent } from './client-component/header/header.component';
import { BtTuan1Component } from './client-component/bt-tuan1/bt-tuan1.component';



@NgModule({
  declarations: [ClientComponent, HomeComponent, BannerComponent, ItemComponent, CardComponent, ProfileComponent, HeaderComponent, BtTuan1Component],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ]
})
export class ClientModule { }
