
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { AdminUserComponent } from './pages/admin-user/admin-user.component';
import { DashboredComponent } from './pages/dashbored/dashbored.component';
import { AdminGuard } from 'src/app/core/guards/admin/admin.guard';


const routesAdmin: Routes = [
  {
    path:"",
    component:AdminComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:"",
        component:DashboredComponent,
        canActivate:[AdminGuard]
      },
      {
        path:"dashboard",
        component:DashboredComponent,
        canActivate:[AdminGuard]
      },
      {
        path:"movies",
        component:AddMovieComponent,
        canActivate:[AdminGuard]
      },
      {
        path:"users",
        component: AdminUserComponent,
        canActivate:[AdminGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
