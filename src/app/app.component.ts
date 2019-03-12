import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart-demo-app';

  isShowShoppingCart: boolean;

  // inject the store to our app.component
  constructor(private store: Store<AppState>) {
    this.isShowShoppingCart = false;
  }

  toggleShow() {
    this.isShowShoppingCart = !this.isShowShoppingCart;
  }
}
