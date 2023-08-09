import "./Card.css";

function Card(props) {
  const styleClass = "card " + props.className;
  return <div className={styleClass}>{props.children}</div>;
}

export default Card;
