import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllProductsComponent} from './all-products/all-products.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { MeatComponent } from './meat/meat.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { DairyComponent } from './dairy/dairy.component';
import { GrainComponent } from './grain/grain.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { FruitsComponent } from './fruits/fruits.component';
import { MushroomComponent } from './mushroom/mushroom.component';
import { NutsComponent } from './nuts/nuts.component';
import { SpicesComponent } from './spices/spices.component';


@NgModule({
  declarations: [
    AllProductsComponent,
    MeatComponent,
    SeafoodComponent,
    DairyComponent,
    GrainComponent,
    VegetablesComponent,
    FruitsComponent,
    MushroomComponent,
    NutsComponent,
    SpicesComponent,
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
      {path: 'grains', component: GrainComponent},
      {path: 'vegetables', component: VegetablesComponent},
      {path: 'fruits', component: FruitsComponent},
      {path: 'mushrooms', component: MushroomComponent},
      {path: 'nuts', component: NutsComponent},
      {path: 'spices', component: SpicesComponent},
    ]),
  ]
})
export class ProductsModule {
}
