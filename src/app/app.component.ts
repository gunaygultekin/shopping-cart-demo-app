import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart-demo-app';

  isShowShoppingCart: boolean;

  constructor() {}

  /**
   * Show cart by user clicks the shopping cart icon
   */
  toggleShow() {
    this.isShowShoppingCart = !this.isShowShoppingCart;
  }
}
