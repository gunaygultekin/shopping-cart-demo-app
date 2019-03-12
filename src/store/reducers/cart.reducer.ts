
import * as CartActions from '../actions/cart.actions';
import { ICartState, initialCartItemState } from '../state/cart.state';
import { Product } from '../../models/product.model';

export function cartReducer(
  state = initialCartItemState,
  action: CartActions.Actions
) {

  switch (action.type) {
    case CartActions.ADD_TO_CART:
      return pushToCart(state, action.payload);
    case CartActions.REMOVE_FROM_CART:
      return removeFromCart(state, action.payload);
    case CartActions.DECREASE_ITEM_COUNT_IN_CART:
      return pullFromCart(state, action.payload);
    default:
      return state;
  }
}

function pushToCart(cart: ICartState, payload: Product): ICartState {
  payload.amount -= 1;
  cart.count += 1;
  cart.sum += payload.price * 1;
  updateItems(cart, payload);
  return cart;
}

function pullFromCart(cart: ICartState, payload: Product): ICartState {
  const targetItem = cart.shoppingCardItems.find(item => item.id === payload.id);
  if (targetItem) {
    if (targetItem.quantity <= 1) {
      // quantity must be greater than 0
      targetItem.quantity = 1;
      alert('MUST be greater than 1');
    } else {
      targetItem.quantity -= 1;
      payload.amount += 1;
      cart.count -= 1;
      cart.sum -= payload.price * 1;
    }
  }
  return cart;
}

function removeFromCart(cart: ICartState, payload: Product): ICartState {
  const targetItem = cart.shoppingCardItems.find(item => item.id === payload.id);
  if (targetItem) {
    const index = cart.shoppingCardItems.indexOf(targetItem);
    cart.shoppingCardItems.splice(index, 1);
    cart.count -= payload.quantity;
    cart.sum -= payload.quantity * payload.price;
    payload.amount += payload.quantity;
    payload.quantity = 1; // Bug-fix: after removing from the cart, the user adds again the same product,
                          // invalid amount is shown on list in cart
  }
  return cart;
}

function updateItems(shopCart: ICartState, payload: Product) {
  const targetItem = shopCart.shoppingCardItems.find(item => item.id === payload.id);
  if (targetItem) {
      targetItem.quantity = payload.quantity + 1; // only one is added to the shopping cart
  } else { // First time adding to shopping cart
    shopCart.shoppingCardItems.push(payload);
  }
}
