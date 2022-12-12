import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <section id="tempnav">
        <img
            id="logo"
            src="./assets/images/logotrans.png"
            alt="Gift Guide Logo"
        ></img>
         <div id="navLinks"></div>
          {Auth.loggedIn() ? (
            <>
              <Link to="/me">
                View My Wishlist
              </Link>
              <button onClick={logout}>
                Logout
              </button>

              
            </>
            
          ) : (
            <>
              <Link style={{ color: 'white', lineHeight : 10, padding: 20 }}id="login" to="/login">
                Login
              </Link>
              <Link style={{ color: 'white', lineHeight : 10, padding: 20 }} id="login" to="/signup">
                Signup
              </Link>
              <Link style={{ color: 'white', lineHeight : 10, padding: 20 }} className="btn btn-dark mb-3" id="login" to="/donate">
                Donate
              </Link>
            </>
          )}

    </section>
  );
};



export default Header;