import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/state/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';
import { ICartState } from '../../store/state/cart.state';
import * as CartActions from '../../store/actions/cart.actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  carts: Observable<ICartState>;

  constructor(private store: Store<AppState>) {
    this.carts = store.select('cart');
  }

  ngOnInit() {}

  /**
   * Remove a selected product from the cart
   * @param product instance
   */
  removeItemFromCart(product) {
    this.store.dispatch(new CartActions.Remove(product));
  }

  /**
   * Increase the amount of selected product
   * @param product instance
   */
  increaseItemCount(product) {
    this.store.dispatch(new CartActions.Add(product));
  }

  /**
   * Decrease the amount of selected product
   * @param product instance
   */
  decreaseItemCount(product) {
    this.store.dispatch(new CartActions.Decrease(product));
  }
}
