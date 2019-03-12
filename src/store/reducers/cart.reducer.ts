
import { Cart } from '../../models/cart.model';
import * as CartActions from '../actions/cart.actions';

const initialState: Cart = {
  product: [{
    id: 11,
    name: 'Turşu',
    price: 300
  }],
  count: 1,
  sum: 300
};

export function cartReducer(
  state: Cart[] = [],
  action: CartActions.Actions
) {

  switch (action.type) {
    case CartActions.ADD_TO_CHART:
      return [...state, action.payload];
    default:
      return state;
  }
}

// function pushToCart(cart: ICartState, payload: Product): ICartState {
//   cart.count += 1;
//   cart.sum += payload.price * 1;
//   // payload.count = 1; // only one is added to the shopping cart
//   updateItems(cart, payload);
//   return cart;
// }

// function pullFromCart(cart: ICartState, payload: Product): ICartState {
//   cart.count -= 1;
//   cart.sum -= payload.price * 1;
//   // payload.count -= 1;
//   updateItems(cart, payload);
//   return cart;
// }

// function updateItems(shopCart: ICartState, payload: Product) {
//   const targetItem = shopCart.shoppingCardItems.find(item => item.id === payload.id);
//   if (targetItem) {
//     if (payload.count <= 0) {
//       const index = shopCart.shoppingCardItems.indexOf(targetItem);
//       shopCart.shoppingCardItems.splice(index, 1);
//     } else {
//       targetItem.count = payload.count + 1; // only one is added to the shopping cart
//     }
//   } else { // First time adding to shopping cart
//     shopCart.shoppingCardItems.push(payload);
//   }
// }
