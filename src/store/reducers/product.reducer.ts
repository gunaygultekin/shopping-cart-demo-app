
import { Product } from '../../models/product.model';
import * as ProductActions from '../actions/product.actions';

const initialState: Product = {
  id: 1,
  name: 'Patates',
  price: 30
};

export function productReducer(
  state: Product[] = [initialState],
  action: ProductActions.Actions
) {

  switch (action.type) {
    case ProductActions.ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
}
