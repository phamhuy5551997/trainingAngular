

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Com404Component } from './components/com404/com404.component';
//module page
import { ClientModule } from 'src/app/modules/client/client.module';
import { AdminModule } from 'src/app/modules/admin/admin.module';

const routes: Routes = [
  {
    path:"",
    loadChildren:()=> ClientModule
  },
  {
    path:"admin",
    loadChildren:()=> AdminModule
  },
  {
    path:"**",
    component: Com404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
