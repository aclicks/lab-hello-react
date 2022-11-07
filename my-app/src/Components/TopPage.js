function TopPage(props) {
	// lógica se necessário

  return (
    
    <div className="TopPage">
        <div className= "navBar">
        <img src={props.logo} />
        <img src={props.menu} />
        </div>
        <h1>Say hello to</h1>
        <h1>ReactJS</h1>
        <p>You will learn how to use</p>
        <p>the most popular frontend library,</p>
        <p>and become a super Ninja developer.</p>
        <button>Awesome!</button>
    </div>
  );
}

export default TopPage;