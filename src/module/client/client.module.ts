import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './client-component/home/home.component';
import { BannerComponent } from './client-component/banner/banner.component';
import { ItemComponent } from './client-component/item/item.component';
import { CardComponent } from './client-component/card/card.component';
import { ProfileComponent } from './client-component/profile/profile.component';
import { HeaderComponent } from './client-component/header/header.component';



@NgModule({
  declarations: [ClientComponent, HomeComponent, BannerComponent, ItemComponent, CardComponent, ProfileComponent, HeaderComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
