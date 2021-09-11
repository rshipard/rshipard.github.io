import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Header } from './Header/Header';
import { Sidebar } from './SideBar/Sidebar'
import { AboutMe } from './About/AboutMe'
import { Portfolio } from './Portfolio/Portfolio';
import { Hobbies } from './Hobbies/Hobbies';
import { Contact } from './Contact/Contact';
import { Index } from './Index/Index'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
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
