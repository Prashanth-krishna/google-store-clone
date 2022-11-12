import { useParams } from "react-router-dom";
import Header from "./header";
function ProductDetail(props) {
  let params = useParams();
  const id = params.id;
  // eslint-disable-next-line
  let product = props.products.filter((item) => item.id == id);
  return (
    <>
      <Header />

      <div>
        <img
          src={require(`./../assets/products/${product[0].src}`)}
          alt={product[0].name}
        />
        <h3>{product[0].shortDescription}</h3>
        <p>{product[0].longDescription}</p>
      </div>
    </>
  );
}
export default ProductDetail;
