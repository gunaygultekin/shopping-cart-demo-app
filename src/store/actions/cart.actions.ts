import { Action } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const ADD_TO_CHART      = '[SHOPPING CART] Add';
export const REMOVE_FROM_CHART    = '[SHOPPING CART] Remove';


export class Add implements Action {
  readonly type = ADD_TO_CHART;
  constructor(public  payload: Product) {}
}

export class Remove implements Action {
  readonly type = REMOVE_FROM_CHART;
  constructor(public  payload: number) {}
}

export type Actions =  Add | Remove;
