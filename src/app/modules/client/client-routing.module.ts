import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const RoutesClient: Routes = [
  {
    path:"",component:ClientComponent,children:[
      {
        path:"",
        component:HomeComponent
      },
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"detail/:id",
        component:DetailComponent
      },
      {
        path:"sign-up",
        component:SignUpComponent
      },
      {
        path:"sign-in",
        component:SignInComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(RoutesClient)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
