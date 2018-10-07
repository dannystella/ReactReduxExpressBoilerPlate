import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {

  	}
  }

  componentDidMount() {
    
  }

  render () {
  	return (
    <div>
      <NavLink to="/">Home</NavLink> 
      <NavLink to="/about">About</NavLink> 
    </div>
    )
  }
}

export default Navbar;