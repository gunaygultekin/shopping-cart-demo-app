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

  toggleShow() {
    this.isShowShoppingCart = !this.isShowShoppingCart;
  }
}
