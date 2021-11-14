import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideNavigationComponent } from './components/shared/aside-navigation/aside-navigation.component';
import { HomeComponent } from './components/home/home.component';
import { BottomNavigationComponent } from './components/shared/bottom-navigation/bottom-navigation.component';
import {ProductsModule} from './components/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    AsideNavigationComponent,
    HomeComponent,
    BottomNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
