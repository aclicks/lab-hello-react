import './App.css';
import Card from './Components/Card';
import TopPage from './Components/TopPage';
import icon1 from './Images/icon1.png';
import icon2 from './Images/icon2.png';
import icon3 from './Images/icon3.png';
import icon4 from './Images/icon4.png';
import ironhackLogo from './Images/ironhack-logo-xs.png';
import menuTop from './Images/menu-top-xs.png';


function App() {
  return (
    <div className="App">
      <TopPage logo={ironhackLogo} menu={menuTop}/>
      <div className="cards">
      <Card icon = {icon1} title = "Declarative"  description = "React makes it painless to create interactive UIs." />
      <Card icon = {icon2} title = "Components"  description = "Build encapsulated components that manage their state" />
      <Card icon = {icon3} title = "Single-Way"  description = "A set of immutable values are passed to the component's" />
      <Card icon = {icon4} title = "JSX"  description = "Statically-typed, designed to run on modern browsers." />
      </div>
    </div>
  );
}

export default App;
