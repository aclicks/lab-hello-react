
function Card(props) {
	// lógica se necessário

  return (
    <div className="Card">
    <img src={props.icon} alt="test build"/>
    <h2>{props.title}</h2>
    <h4>{props.description}</h4>
  </div>
  );
}

export default Card;