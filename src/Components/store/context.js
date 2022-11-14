import { useState, createContext } from "react";

const Cart = createContext({
  items: [],
  numberOfItems: 0,
  addToCart: (item) => {},
  removeFromCart: (itemId) => {},
  isInCart: (itemId) => {},
  IncrementItem: (itemId) => {},
  DecrementItem: (itemId) => {},
});
export function CartContextProvider(props) {
  const [itemsInCart, SetItemsInCart] = useState([]);

  function AddToCartHander(item) {
    SetItemsInCart((prevState) => {
      return prevState.concat(item);
    });
  }
  function RemoveFromCartHandler(itemId) {
    SetItemsInCart((prevState) => {
      return prevState.filter((items) => items.id !== itemId);
    });
  }
  function IsInCartChecker(itemId) {
    return itemsInCart.some((items) => items.id === itemId);
  }
  function IncrementItemHandler(itemId) {
    const product = itemsInCart.filter(
      (items) => items.id === itemId.toString()
    );
    SetItemsInCart((prevState) => {
      return prevState
        .filter((items) => items.id !== itemId.toString())
        .concat({
          quantity: product[0].quantity++,
          ...product[0],
        });
    });
  }
  function DecrementItemHandler(itemId) {
    const product = itemsInCart.filter(
      (items) => items.id === itemId.toString()
    );
    if (product[0].quantity === 1) {
      SetItemsInCart((prevState) => {
        return prevState.filter((items) => items.id !== itemId.toString());
      });
    } else {
      SetItemsInCart((prevState) => {
        return prevState
          .filter((items) => items.id !== itemId.toString())
          .concat({
            quantity: product[0].quantity--,
            ...product[0],
          });
      });
    }
  }
  const context = {
    items: itemsInCart,
    numberOfItems: itemsInCart.length,
    addToCart: AddToCartHander,
    removeFromCart: RemoveFromCartHandler,
    isInCart: IsInCartChecker,
    IncrementItem: IncrementItemHandler,
    DecrementItem: DecrementItemHandler,
  };

  //   console.log(itemsInCart);
  return <Cart.Provider value={context}>{props.children}</Cart.Provider>;
}

export default Cart;
