function Navbar(props) {
	

  return (
        <div className= "navBar">
        <img src={props.logo} />
        <img src={props.menu} />
        </div>
  );
}

export default Navbar;