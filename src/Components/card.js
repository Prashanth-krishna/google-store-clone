import "./card.css";
function Card(props) {
  return (
    <div className="card">
      <img
        src={require(`./../assets/products/${props.src}`)}
        alt={props.name}
      />
      <span>{props.name}</span>
    </div>
  );
}
export default Card;
