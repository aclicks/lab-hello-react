import './App.css';

function Card(props) {
	// lógica se necessário

  return (
    <div className="Card">
      <p>{props.icon}</p>
	    <h1>{props.title}</h1>
	    <h2>{props.description}</h2>
    </div>
  );
}

export default Card;