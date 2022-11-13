import { useContext } from "react";
import Cart from "./store/context";
function ItemInCart(props) {
  const CartCTX = useContext(Cart);
  function IncreaseQuantity() {
    CartCTX.addToCart({
      id: props.id,
      price: props.price,
      quantity: props.quantity,
    });
    console.log(CartCTX.items);
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
        <button>-</button>
      </div>
      <div className="total">
        <p>Total</p>
        <p>${props.price * props.quantity}</p>
      </div>
    </div>
  );
}
export default ItemInCart;
