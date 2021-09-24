import './FinalPage.css'
import { LandingPage } from './LandingPage/LandingPage'
import { AboutMe } from './AboutMe/AboutMe'
import { Contact } from './Contact/Contact'
import { Header } from './Header/Header'
import { NavBar } from './NavBar/NavBar'
import { Portfolio } from './Portfolio/Portfolio'
import { Hobbies } from './Hobbies/Hobbies'
import { Route, Switch } from 'react-router-dom'


export default function FinalPage(props) {

  return (
    <div className="FinalPage">
      <Header />
      <NavBar />
      <Switch>
        <Route
          path="/about"
          component={AboutMe}
        />
        <Route
          path="/portfolio"
          component={Portfolio}
        />
        <Route
          path="/hobbies"
          component={Hobbies}
        />
        <Route
          path="/contact"
          component={Contact}
        />
        <Route
          path="/"
          component={LandingPage}
        />
      </Switch>
    </div>
  )
}
