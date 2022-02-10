

import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
//module
import { PrimeNgModule } from './../../core/shared/prime-ng/prime-ng.module';
import { PipeModule } from 'src/app/core/pipes/pipe.module';

import { DashboredComponent } from './pages/dashbored/dashbored.component';
import { AdminUserComponent } from './pages/admin-user/admin-user.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminListUserComponent } from './components/admin-list-user/admin-list-user.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { NewMovieComponent } from './components/new-movie/new-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { NewTimeComponent } from './components/new-time/new-time.component';

@NgModule({
  declarations: [AdminComponent, DashboredComponent, AdminUserComponent, AddMovieComponent,  NavbarComponent, AdminListUserComponent, HeaderAdminComponent, NewMovieComponent, EditMovieComponent, NewTimeComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    PrimeNgModule,
    PipeModule
  ],
  providers:[
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AdminModule { }
