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
import store from './store';

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {

  	}
  }

  render () {
  	return (
    <div>
      <HashRouter>
        <Switch>
        <Route path="/" render={() => (
            <Main/>   
          )} />  
        </Switch>
      </HashRouter>
    </div>)
  }
}

ReactDOM.render(<Provider store = {store}>
<App />
</Provider>
, document.getElementById('app'));