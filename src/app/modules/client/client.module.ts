import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from './client.component';
//module
import { ClientRoutingModule } from './client-routing.module';
import { PipeModule } from 'src/app/core/pipes/pipe.module';
//module
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FoodterComponent } from './components/foodter/foodter.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ItemComponent } from './components/item/item.component';
import { DetailItemComponent } from './components/detail-item/detail-item.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


//module primeNG
import { PrimeNgModule } from '../../../app/core/shared/prime-ng/prime-ng.module';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShowTimeComponent } from './components/show-time/show-time.component';
import { BookingComponent } from './pages/booking/booking.component';





@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    DetailComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    HeaderComponent,
    FoodterComponent,
    CarouselComponent,
    ListItemComponent,
    ItemComponent,
    DetailItemComponent,
    PopUpComponent,
    NavBarComponent,
    AboutComponent,
    ContactComponent,
    ShowTimeComponent,
    BookingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientRoutingModule,
    PrimeNgModule,
    PipeModule
  ]
})
export class ClientModule { }
