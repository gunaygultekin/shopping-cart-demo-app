import { Action } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const ADD_PRODUCT       = '[Product] Add';
export const REMOVE_PRODUCT    = '[Product] Remove';

/**
 * Add an item to the product list
 */
export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;
  constructor(public  payload: Product) {}
}

/**
 * Remove an item from the product list
 */
export class RemoveProduct implements Action {
  readonly type = REMOVE_PRODUCT;
  constructor(public  payload: number) {}
}

export type Actions =  AddProduct | RemoveProduct;
