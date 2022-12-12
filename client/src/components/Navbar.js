import React from "react";
import Auth from "../utils/auth";
import { NavLink } from "react-router-dom";

function NavBar() {
  if (Auth.loggedIn()) {
    return (
      <li className="Auth.btn">
        <a href="/" onClick={() => Auth.logout()}>
          Logout
        </a>
      </li>
    );
  } else {
    return (
      <section id="tempnav">
        <img
          id="logo"
          src="./assets/images/logotrans.png"
          alt="Gift Guide Logo"
        ></img>
        <div id="navLinks">
          <button id="login">Join/Log-In</button>
          <a
            href="https://buy.stripe.com/test_3cs6rWcBJ0SEe9a000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="donate">Donate</button>
          </a>
        </div>

      </section>
    );
  }
}


export default NavBar;
