import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { productReducer} from '../store/reducers/product.reducer';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductComponent } from './product/product.component';

import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    ProductCreateComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      product: productReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
