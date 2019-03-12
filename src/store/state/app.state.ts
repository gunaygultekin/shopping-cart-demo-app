import { Product } from '../../models/product.model';
import { ICartState } from './cart.state';

export interface AppState {
  readonly product: Product[];
  readonly cart: ICartState;
}
