import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <ul className="navbar" >
      <br/>
      <li><NavLink to="/">Home</NavLink></li>
      <br/>
      <li><NavLink to="/QuizForm">QuizForm</NavLink></li>
      <br/>
  </ul>;
}

export default NavBar;
