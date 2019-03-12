import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';
import { Product } from '../../models/product.model';
import { AppState } from '../../store/state/app.state';
import { Store } from '@ngrx/store';
import * as CartActions from '../../store/actions/cart.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products = store.select('product');
  }

  ngOnInit() {}

  addToShoppingCartList(product: Product) {
    this.store.dispatch(new CartActions.Add(product));
  }
}
