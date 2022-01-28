
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';


import { DashboredComponent } from './pages/dashbored/dashbored.component';
import { AdminUserComponent } from './pages/admin-user/admin-user.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { EditMovieComponent } from './pages/edit-movie/edit-movie.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminListUserComponent } from './components/admin-list-user/admin-list-user.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminComponent, DashboredComponent, AdminUserComponent, AddMovieComponent, EditMovieComponent, NavbarComponent, AdminListUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
