import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllProductsComponent} from './all-products/all-products.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { MeatComponent } from './meat/meat.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { DairyComponent } from './dairy/dairy.component';


@NgModule({
  declarations: [
    AllProductsComponent,
    MeatComponent,
    SeafoodComponent,
    DairyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'all', component: AllProductsComponent},
      {path: 'meat', component: MeatComponent},
      {path: 'seafood', component: SeafoodComponent},
      {path: 'dairy', component: DairyComponent},
    ]),
  ]
})
export class ProductsModule {
}
