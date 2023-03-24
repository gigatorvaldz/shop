import React from "react";
import { NavLink } from "react-router-dom";

interface HeaderPropsI {}

const Header = (props: HeaderPropsI) => {
  return (
    <nav>
      <NavLink to="/app">To APP</NavLink>
      <NavLink to="/catalogue">To catalogue</NavLink>
      <NavLink to="fdagagsdgsgasdgasg">Error check</NavLink>
    </nav>
  );
};

export default Header;
