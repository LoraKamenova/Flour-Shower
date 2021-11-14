import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsideNavigationComponent} from './aside-navigation/aside-navigation.component';
import {BottomNavigationComponent} from './bottom-navigation/bottom-navigation.component';
import {RouterModule} from '@angular/router';
import {TopNavigationComponent} from './top-navigation/top-navigation.component';

@NgModule({
  declarations: [
    AsideNavigationComponent,
    BottomNavigationComponent,
    TopNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AsideNavigationComponent,
    BottomNavigationComponent,
    TopNavigationComponent
  ]
})
export class SharedModule {
}
