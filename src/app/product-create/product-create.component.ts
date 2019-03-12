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

  isSuccess: boolean;

  constructor(private store: Store<AppState>) {
    this.isSuccess = false;
  }

  addProduct(id, name, price, amount, quantity = 1) {
    this.store.dispatch(new ProductActions.AddProduct({id, name, price, amount, quantity}));
    this.isSuccess = true;
  }

  clear(id, name, price, amount) {
    id.value = '';
    name.value = '';
    price.value = '';
    amount.value = '';
    this.isSuccess = false;
  }

  ngOnInit() {
  }

}
