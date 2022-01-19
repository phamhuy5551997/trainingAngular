
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from 'src/module/admin/admin.module';
import { ClientModule } from 'src/module/client/client.module';
import { Com404Component } from './components/com404/com404.component';

const routes: Routes = [
  {
    path:"",
    loadChildren:()=> ClientModule
  },
  {
    path:"client",
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
