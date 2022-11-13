import { useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "./header";
import "./productdetails.css";
import Cart from "./store/context";
function ProductDetail(props) {
  const CartCTX = useContext(Cart);
  let params = useParams();
  const id = params.id;
  const isInShoppingCart = CartCTX.isInCart(id);
  //   console.log(isInShoppingCart);
  // eslint-disable-next-line
  let product = props.products.filter((item) => item.id == id);
  function AddToCartHandler() {
    CartCTX.addToCart({
      id: id,
      price: 100,
      quantity: 1,
    });
  }
  function RemoveFromCartHandler() {
    CartCTX.removeFromCart(id);
  }
  let btn = "";
  if (isInShoppingCart) {
    btn = <button onClick={RemoveFromCartHandler}>Remove From Cart</button>;
  } else {
    btn = <button onClick={AddToCartHandler}>Add to Cart</button>;
  }
  return (
    <>
      <Header />

      <div className="detail">
        <img
          src={require(`./../assets/products/${product[0].src}`)}
          alt={product[0].name}
        />
        <h3>{product[0].shortDescription}</h3>
        <p>{product[0].longDescription}</p>
        {btn}
      </div>
    </>
  );
}
export default ProductDetail;
