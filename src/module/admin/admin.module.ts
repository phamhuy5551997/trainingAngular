import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './admin-compoent/header/header.component';
import { HomeComponent } from './admin-compoent/home/home.component';
import { AdditemComponent } from './admin-compoent/additem/additem.component';
import { ProfileComponent } from './admin-compoent/profile/profile.component';
import { DashboardComponent } from './admin-compoent/dashboard/dashboard.component';



@NgModule({
  declarations: [AdminComponent, HeaderComponent, HomeComponent, AdditemComponent, ProfileComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
