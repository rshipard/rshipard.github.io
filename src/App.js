import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Header } from './Views/Header/Header';
import { NavBar } from './Views/NavBar/NavBar'
import { AboutMe } from './Views/AboutMe/AboutMe'
import { Portfolio } from './Views/Portfolio/Portfolio';
import { Hobbies } from './Views/Hobbies/Hobbies';
import { Contact } from './Views/Contact/Contact';
import { Index } from './Views/Index/Index'

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route path="/about" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Index} />
      </Switch>
    </div>
  );
}

export default App;
