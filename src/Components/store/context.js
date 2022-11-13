import { useState, createContext } from "react";

const Cart = createContext({
  items: [],
  numberOfItems: 0,
  addToCart: (item) => {},
  removeFromCart: (itemId) => {},
  isInCart: (itemId) => {},
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

  const context = {
    items: itemsInCart,
    numberOfItems: itemsInCart.length,
    addToCart: AddToCartHander,
    removeFromCart: RemoveFromCartHandler,
    isInCart: IsInCartChecker,
  };

  //   console.log(context);
  return <Cart.Provider value={context}>{props.children}</Cart.Provider>;
}

export default Cart;
