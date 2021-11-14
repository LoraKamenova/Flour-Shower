import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AsideNavigationComponent} from './aside-navigation/aside-navigation.component';
import {BottomNavigationComponent} from './bottom-navigation/bottom-navigation.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AsideNavigationComponent,
    BottomNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AsideNavigationComponent,
    BottomNavigationComponent
  ]
})
export class SharedModule { }
