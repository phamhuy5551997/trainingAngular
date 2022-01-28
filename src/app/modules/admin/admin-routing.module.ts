
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { AdminUserComponent } from './pages/admin-user/admin-user.component';
import { DashboredComponent } from './pages/dashbored/dashbored.component';
import { EditMovieComponent } from './pages/edit-movie/edit-movie.component';


const routesAdmin: Routes = [
  {
    path:"",component:AdminComponent,children:[
      {
        path:"",
        component:DashboredComponent
      },
      {
        path:"dashboard",
        component:DashboredComponent
      },
      {
        path:"add-movie",
        component:AddMovieComponent
      },
      {
        path:"edit-movie",
        component:EditMovieComponent
      },
      {
        path:"list-user",
        component: AdminUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
