import React, { Component, createContext } from 'react';
import { Switch, Route } from 'react-router-dom';
// import 'materialize-css/dist/css/materialize.min.css';

import Navbar from './Components/Navbar/Nav';
import Home from './pages/Home';
import SignUp from './pages/Account/SignUp';
import LogOut from './pages/Account/LogOut';
import Contact from './pages/Contact/Contact';
import MeasureWrapper from './pages/MeasureWrapper';
import Measurements from './Components/Measurements/Measurement';
import Footer from './Components/Footer/Footer';
import ProtectedRoute from './utils/protectedRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import Client from './pages/Client/Client';
import ThemeContextProvider from './Context/ThemeContext';
import AuthContextProvider from './Context/AuthContext';
import { UserGenerate } from './Context/UserContext';
import SignIn from './pages/Account/SignIn';
import Auth from './utils/auth';

 class App extends Component {
  state = {
    user: []
  }


render() {
  return (
    <div className='main-container'>
      <div className='App screen'>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            
              <Route exact path='/' component={Home} />
              <Route
                path='/signup'
                render={() => <SignUp  />}
              />
              <Route
                path='/signin'
                render={() => <SignIn />}
              />
              <Route
                path='/logout'
                render={() => <LogOut />}
              />
              <Route exact path='/newmeasure' component={MeasureWrapper} />
              <Route path='/contact' component={Contact} />
              <Route path='/measurements' component={Measurements} />
              <Route path='/dashboard' component={Dashboard} />
              <Route
                path='/clients'
                render={props => (
                  <Client
                    userName='Bev Mode'
                    userId='5e1a3aaa69bf0f4698c1f67f'
                  />
                )}
              />
          </Switch>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
 }

export default App;
