import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodterComponent } from './components/foodter/foodter.component';
import { Com404Component } from './components/com404/com404.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodterComponent,
    Com404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
