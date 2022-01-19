import { Com404Component } from './../../app/components/com404/com404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './admin-compoent/header/header.component';
import { HomeComponent } from './admin-compoent/home/home.component';
import { AdditemComponent } from './admin-compoent/additem/additem.component';
import { ProfileComponent } from './admin-compoent/profile/profile.component';
import { DashboardComponent } from './admin-compoent/dashboard/dashboard.component';

const routesAdmin: Routes = [
  {
    path:"",component:AdminComponent,children:[
      {
        path:"",
        component:HomeComponent
      },
      {
        path:"dashboard",
        component:DashboardComponent
      },
      {
        path:"profileAdmin",
        component:ProfileComponent
      },
      {
        path:"additem",
        component:AdditemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
