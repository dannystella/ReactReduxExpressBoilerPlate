import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter,
  Switch
} from "react-router-dom";
import { Provider } from 'react-redux';
import Main from './pages/home.jsx';
import About from './pages/about.jsx';
import store from './store';
import Navbar from './components/navbar.jsx';

class Routes extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {

  	}
  }

  render () {
  	return (
    <div>
      <HashRouter>
        <div>
        <Navbar/>
        <Switch>
        <Route path="/about" render={() => (
            <About/>   
          )} />  
        <Route path="/" render={() => (
            <Main/>   
          )} />  
        </Switch>
        </div>
      </HashRouter>
    </div>)
  }
}

export default Routes;