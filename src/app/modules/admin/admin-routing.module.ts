
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { AdminUserComponent } from './pages/admin-user/admin-user.component';
import { DashboredComponent } from './pages/dashbored/dashbored.component';



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
        path:"movies",
        component:AddMovieComponent
      },
      {
        path:"users",
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
