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

  removeItemFromCart(product) {
    this.store.dispatch(new CartActions.Remove(product));
  }

  increaseItemCount(product) {
    this.store.dispatch(new CartActions.Add(product));
  }

  decreaseItemCount(product) {
    this.store.dispatch(new CartActions.Decrease(product));
  }
}
