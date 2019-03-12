import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import * as TutorialActions from '../../store/actions/product.actions';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addProduct(id, name, price) {
    this.store.dispatch(new TutorialActions.AddProduct({id, name, price}));
  }

  ngOnInit() {
  }

}
