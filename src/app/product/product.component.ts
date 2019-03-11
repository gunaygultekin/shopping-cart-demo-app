import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';
import { Product } from '../../models/product.model';
import { AppState } from '../../store/state/app.state';
import { Store } from '@ngrx/store';

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

  ngOnInit() {
  }

}
