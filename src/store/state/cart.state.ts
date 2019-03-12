import { Product } from '../../models/product.model';

export interface ICartState {
  shoppingCardItems: Product[];
  count: number;
  sum: number;
}

export const initialCartItemState: ICartState = {
  shoppingCardItems: [],
  count: 0,
  sum: 0
};
