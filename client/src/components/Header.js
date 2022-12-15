import React, { useState }  from "react";
import { Link, Navigate } from "react-router-dom";


import Auth from "../utils/auth";
import CountDownTimer from "./CountDownTimer";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  console.log(Auth.loggedIn())
  return (
    <section id="nav">
      <img
        id="logo"
        src="./assets/images/logotrans.png"
        alt="Gift Guide Logo"
      ></img>
      <div>
       <CountDownTimer />
      </div>
      {Auth.loggedIn() ? (
        <div className="navLinks" class="container borderYtoX">
          <button id="logout" class="container borderYtoX" onClick={logout}>Logout</button>
          <Link
            class="container borderYtoX"
            id="createList"
            to="/create"
          >
            Create Wish List
          </Link>
        </div>
      ) : (

        <div className="navLinks" class="container borderYtoX">
          <Link
            id="login"
            to="/login"
          >
            Login
          </Link>
          <Link
            id="signup"
            to="/signup"
          >
            Signup
          </Link>
          <Link
            className="btn btn-dark mb-3"
            class="container borderYtoX"
            id="donate"
            to="/donate"
          >
            Donate
          </Link>
        </div>
      )}
    </section>
  );
};

export default Header;
