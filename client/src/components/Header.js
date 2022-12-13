import React, { useState }  from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [list, setList] = useState([]);
  const createList = (event) => {
    event.preventDefault();
    const newList = [[], ...list];
    setList(newList);
  }

  console.log(Auth.loggedIn())
  return (
    <section id="nav">
      <img
        id="logo"
        src="./assets/images/logotrans.png"
        alt="Gift Guide Logo"
      ></img>
      {Auth.loggedIn() ? (
        <div className="navLinks">
          <button id="logout" onClick={logout}>Logout</button>
          <button id="createList" onClick={() => createList()}>Create Wish List</button>
        </div>
      ) : (
        <div className="navLinks">
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
