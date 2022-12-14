import { useContext } from "react";
import Cart from "./store/context";
import "./checkout.css";
import { Link } from "react-router-dom";
import ItemInCart from "./itemincart";
function Checkout(props) {
  const AllProducts = props.products;
  const CartCTX = useContext(Cart);
  const itemsArray = CartCTX.items;
  let sum = 0;
  itemsArray.forEach((item) => (sum += item.price * item.quantity));
  function BuyHandler() {
    alert("Successful! Your item will be delivered in 3-5 days");
    CartCTX.EmptyCart();
  }
  // console.log(itemsArray);
  if (itemsArray.length === 0) {
    return (
      <div className="checkoutEmptyContainer">
        <p>Your Cart is Empty.</p>
        <img src={require(`./../assets/empty_cart_logo.png`)} alt="empty" />
        <Link to="/">
          <button>Back to Store</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="checkoutContainer">
        {itemsArray.map((item) => {
          const product = AllProducts.filter(
            (prod) => prod.id.toString() === item.id
          );

          // console.log(product[0].price);
          return (
            <ItemInCart
              price={product[0].price}
              quantity={item.quantity}
              name={product[0].name}
              src={product[0].src}
              key={product[0].id}
              id={product[0].id}
            />
          );
        })}
        <p>Grand Total</p>
        <span>${sum}</span>
        <div className="btn">
          {CartCTX.isLoggedIn ? (
            <button onClick={BuyHandler}>Buy Now</button>
          ) : (
            <Link to="/login">
              <button>Buy Now</button>
            </Link>
          )}
        </div>
      </div>
    );
  }
}
export default Checkout;
