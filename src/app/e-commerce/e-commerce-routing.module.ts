import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LayoutEcommComponent } from './pages/layout-ecomm/layout-ecomm.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'E-commerce', pathMatch: 'full' },
  {
    path: 'E-commerce',
    component: LayoutEcommComponent,
  },
  { path: 'shopping-cart', component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECommerceRoutingModule {}
