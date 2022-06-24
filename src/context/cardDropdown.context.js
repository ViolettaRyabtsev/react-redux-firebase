import { createContext, useState, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
const addCartItem = (cartItems, productToAdd) => {
  //if find, increment quantity
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //return new array with modified cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  // find cart item
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  // check if quantity===1 if is remove item
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => {
      return cartItem.id !== productToRemove.id;
    });
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );

  // else return cartitems with reduced quantity
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const CartActions = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_OPEN: "SET_CART_OPEN",
};

const CartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartActions.SET_CART_ITEMS:
      return { ...state, ...payload };
    case CartActions.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [
    { isCartOpen, cartItems, cartCount, cartTotal },
    dispatch,
  ] = useReducer(CartReducer, INITIAL_STATE);

  const setIsCartOpen = (boolean) => {
    dispatch({
      type: CartActions.SET_CART_OPEN,
      payload: {
        isCartOpen: boolean,
      },
    });
  };

  const updateCartItemsReducers = (newCartCartItems) => {
    //generate new cart total, count, price
    const newCartCount = newCartCartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);

    const newCartTotal = newCartCartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);

    dispatch(
      createAction(CartActions.SET_CART_ITEMS, {
        cartItems: newCartCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
    //dispatch new action
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducers(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const removedCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemsReducers(removedCartItems);
  };

  // const clearItemFromCart = (ClearItem) => {
  //   let arr = cartItems.filter((item) => {
  //     return item.id !== ClearItem.id;
  //   });
  //   // setCartItems(arr);
  //   updateCartItemsReducers(removedCartItems);
  // };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    // clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children} </CartContext.Provider>;
};
