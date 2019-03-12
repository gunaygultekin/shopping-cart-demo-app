import { Product } from './product.model';

export interface Cart {
  product: Product[];
  count: number;
  sum: number;
}
