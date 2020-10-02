import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

function NavBar(props) {
  let navBarItems = [
    <li key={1}>
      <Link to={"/"}>All Movies</Link>
    </li>,
  ];
  if (props.isLoggedIn) {
    navBarItems.push(
      <li key={2}>
        <Link to={"/logout"}>Log Out</Link>
      </li>
    );
  } else {
    navBarItems.push(
      <li key={3}>
        <Link to={"/signup"}>Sign Up</Link>
      </li>
    );
    navBarItems.push(
      <li key={4}>
        <Link to={"/login"}>Log In</Link>
      </li>
    );
  }

  return (
    <>
      <h1>Blockbuster</h1>
      <nav>
         <ul>{navBarItems}</ul>
      </nav>
    </>
  );
}

export default NavBar;