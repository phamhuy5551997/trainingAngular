import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './client.component';
//module
import { ClientRoutingModule } from './client-routing.module';
import { PipeModule } from 'src/app/core/pipes/pipe.module';
//module primeNG
import { PrimeNgModule } from '../../../app/core/shared/prime-ng/prime-ng.module';
//Guard
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { LoginGuard } from 'src/app/core/guards/login/login.guard';
//
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
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShowTimeComponent } from './components/show-time/show-time.component';
import { BookingComponent } from './pages/booking/booking.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ChairComponent } from './components/chair/chair.component';
import { MessageComponent } from './components/message/message.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { PopUpEditUserComponent } from './components/pop-up-edit-user/pop-up-edit-user.component';

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
    LoadingComponent,
    ChairComponent,
    MessageComponent,
    UserLoginComponent,
    PopUpEditUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    PrimeNgModule,
    PipeModule
  ],
  providers:[
    AuthGuard,
    LoginGuard
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ClientModule { }
