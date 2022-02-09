import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';
//guard
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { LoginGuard } from 'src/app/core/guards/login/login.guard';

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
        path:"booking/:id",
        component: BookingComponent,
        canActivate: [AuthGuard]
      },
      {
        path:"sign-up",
        component:SignUpComponent,
        canActivate:[LoginGuard]
      },
      {
        path:"sign-in",
        component:SignInComponent,
        canActivate:[LoginGuard]
      },
      {
        path:"profile",
        component: ProfileComponent,
        canActivate:[AuthGuard]
      },
      {
        path:"search/:tag",
        component: SearchComponent,
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(RoutesClient)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
