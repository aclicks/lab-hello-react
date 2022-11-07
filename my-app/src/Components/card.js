
function Card(props) {
	// lógica se necessário

  return (
    <div className="Card">
    <img src={props.icon} alt="test build"/>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
  );
}

export default Card;