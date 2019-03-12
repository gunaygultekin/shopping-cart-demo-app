import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { productReducer} from '../store/reducers/product.reducer';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductComponent } from './product/product.component';

import { StoreModule } from '@ngrx/store';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { cartReducer } from '../store/reducers/cart.reducer';
import { DataSharingService } from '../services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductCreateComponent,
    ProductComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      product: productReducer,
      cart: cartReducer
    })
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
