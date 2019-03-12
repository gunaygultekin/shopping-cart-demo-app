import {Action} from '@ngrx/store';
import {Product} from '../../models/product.model';

// export enum EProductActions {
//   Add_Product = '[Product] Add',
//   Remove_Product = '[Product] Remove',
// }

export const ADD_PRODUCT       = '[Product] Add';
export const REMOVE_PRODUCT    = '[Product] Remove';


export class AddProduct implements Action {
  // public readonly type = EProductActions.Add_Product;
  readonly type = ADD_PRODUCT;
  constructor(public  payload: Product) {}
}

export class RemoveProduct implements Action {
  // public readonly type = EProductActions.Remove_Product;
  readonly type = REMOVE_PRODUCT;
  constructor(public  payload: number) {}
}

export type Actions =  AddProduct | RemoveProduct;
