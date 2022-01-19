import { Com404Component } from './../../app/components/com404/com404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './client-component/home/home.component';
import { BannerComponent } from './client-component/banner/banner.component';
import { ItemComponent } from './client-component/item/item.component';
import { CardComponent } from './client-component/card/card.component';
import { ProfileComponent } from './client-component/profile/profile.component';
import { ClientModule } from './client.module';

const routesClient: Routes = [
  {
    path:"",component:ClientComponent,children:[
      {
        path:"",
        component:HomeComponent
      },
      {
        path:"banner",
        component:BannerComponent
      },
      {
        path:"item/:id",
        component:ItemComponent
      },
      {
        path:"profile",
        component:ProfileComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routesClient)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
