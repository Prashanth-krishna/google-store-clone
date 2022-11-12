import { Link } from "react-router-dom";
import "./card.css";
function Card(props) {
  let toLink = `${props.type}/${props.id}`;
  return (
    <Link to={toLink} style={{ textDecoration: "none", color: "black" }}>
      <div className="card">
        <img
          src={require(`./../assets/products/${props.src}`)}
          alt={props.name}
        />
        <span>{props.name}</span>
      </div>
    </Link>
  );
}
export default Card;
