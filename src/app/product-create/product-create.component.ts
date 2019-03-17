import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import * as ProductActions from '../../store/actions/product.actions';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  isSuccess: boolean; // it is used in UI for showing message to the user

  constructor(private store: Store<AppState>) {
    this.isSuccess = false;
  }

  /**
   * add a product to the product list
   * according to the UI, only one item is added to the product list
   * @param id number
   * @param name string
   * @param price number
   * @param amount number
   * @param quantity default set 1
   */
  addProduct(id, name, price, amount, quantity = 1) {
    this.store.dispatch(new ProductActions.AddProduct({id, name, price, amount, quantity}));
    this.isSuccess = true;
  }

  /**
   * Clear given variables
   * @param id number
   * @param name string
   * @param price number
   * @param amount number
   */
  clear(id, name, price, amount) {
    id.value = '';
    name.value = '';
    price.value = '';
    amount.value = '';
    this.isSuccess = false;
  }

  ngOnInit() {}
}
