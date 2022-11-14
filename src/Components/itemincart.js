import { useContext } from "react";
import Cart from "./store/context";
function ItemInCart(props) {
  const CartCTX = useContext(Cart);
  function IncreaseQuantity() {
    CartCTX.IncrementItem(props.id);
    // console.log(CartCTX.items);
  }
  function DecreaseQuantity() {
    CartCTX.DecrementItem(props.id);
    // console.log(CartCTX.items);
  }

  return (
    <div className="products">
      <img
        src={require(`./../assets/products/${props.src}`)}
        alt={props.name}
      />
      <div className="description">
        <p>{props.name}</p>

        <span>${props.price}</span>
      </div>
      <div className="quantity">
        <p>Quantity</p>
        <p>{props.quantity}</p>
        <button onClick={IncreaseQuantity}>+</button>
        <button onClick={DecreaseQuantity}>-</button>
      </div>
      <div className="total">
        <p>Total</p>
        <p>${props.price * props.quantity}</p>
      </div>
    </div>
  );
}
export default ItemInCart;
