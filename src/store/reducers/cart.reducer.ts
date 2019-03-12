
import * as CartActions from '../actions/cart.actions';
import {ICartState, initialCartItemState} from '../state/cart.state';
import {Product} from '../../models/product.model';

export function cartReducer(
  state = initialCartItemState,
  action: CartActions.Actions
) {

  switch (action.type) {
    case CartActions.ADD_TO_CHART:
      return pushToCart(state, action.payload);
    default:
      return state;
  }
}

function pushToCart(cart: ICartState, payload: Product): ICartState {
  cart.count += 1;
  cart.sum += payload.price * 1;
  // payload.count = 1; // only one is added to the shopping cart
  updateItems(cart, payload);
  return cart;
}

// function pullFromCart(cart: ICartState, payload: Product): ICartState {
//   cart.count -= 1;
//   cart.sum -= payload.price * 1;
//   // payload.count -= 1;
//   updateItems(cart, payload);
//   return cart;
// }

function updateItems(shopCart: ICartState, payload: Product) {
  const targetItem = shopCart.shoppingCardItems.find(item => item.id === payload.id);
  if (targetItem) {
    // if (payload.count <= 0) {
    //   const index = shopCart.shoppingCardItems.indexOf(targetItem);
    //   shopCart.shoppingCardItems.splice(index, 1);
    // } else {
    //   targetItem.count = payload.count + 1; // only one is added to the shopping cart
    // }
  } else { // First time adding to shopping cart
    shopCart.shoppingCardItems.push(payload);
  }
}
