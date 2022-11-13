import { useContext } from "react";
import Cart from "./store/context";
import "./checkout.css";
function Checkout(props) {
  const AllProducts = props.products;
  const CartCTX = useContext(Cart);
  const itemsArray = CartCTX.items;
  // console.log(itemsArray);
  return (
    <div className="checkoutContainer">
      {itemsArray.map((item) => {
        const product = AllProducts.filter(
          (prod) => prod.id.toString() === item.id
        );
        // console.log(product[0]);
        return (
          <div className="products">
            <img
              src={require(`./../assets/products/${product[0].src}`)}
              alt={props.name}
            />
            <p>{product[0].name}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Checkout;
