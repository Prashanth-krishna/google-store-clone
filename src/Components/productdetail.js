import { useParams } from "react-router-dom";
import Header from "./header";
import "./productdetails.css";
function ProductDetail(props) {
  let params = useParams();
  const id = params.id;
  // eslint-disable-next-line
  let product = props.products.filter((item) => item.id == id);
  const AddToCartHandler = () => {
    console.log(id);
  };
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
        <button onClick={AddToCartHandler}>Add to Cart</button>
      </div>
    </>
  );
}
export default ProductDetail;
