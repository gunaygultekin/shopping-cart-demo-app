import { Product } from '../../models/product.model';
import { Cart } from '../../models/cart.model';

export interface AppState {
  readonly product: Product[];
  readonly cart: Cart[];
}
