import { Action } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const ADD_TO_CART = '[SHOPPING CART] Add';
export const REMOVE_FROM_CART = '[SHOPPING CART] Remove';
export const DECREASE_ITEM_COUNT_IN_CART = '[SHOPPING CART] Decrease Item Count';

/**
 * Add product to cart
 */
export class Add implements Action {
  readonly type = ADD_TO_CART;
  constructor(public  payload: Product) {}
}

/**
 * Remove product from cart
 */
export class Remove implements Action {
  readonly type = REMOVE_FROM_CART;
  constructor(public  payload: Product) {}
}

/**
 * Decrease the number of product in cart
 */
export class Decrease implements Action {
  readonly type = DECREASE_ITEM_COUNT_IN_CART;
  constructor(public  payload: Product) {}
}

export type Actions =  Add | Remove | Decrease;
