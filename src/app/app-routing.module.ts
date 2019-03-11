import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProductCreateComponent} from './product-create/product-create.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: '',   redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
