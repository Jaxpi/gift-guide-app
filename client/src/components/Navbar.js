import React from "react";
import Auth from "../utils/auth";
import { NavLink } from "react-router-dom";
import "./NavBar.css";


function NavBar() {

    function showNav() {
        if (Auth.loggedIn()) {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        <NavLink to="/Dashboard">
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="Auth.btn">
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        <NavLink to="/SignupForm">
                            Signup
                        </NavLink>
                    </li>
                    <li className="mx-1">
                        <NavLink to="/LoginForm">
                            Login
                        </NavLink>
                    </li>
                </ul>
            );
        }
    }

    return (
        <header className="flex-row px-1">
            <h1>
                <Link to="/Dashboard">
                    <a class="navbar-brand" href="./public/assets/images/logotrans.png">
                        <div class="logo-image">
                            <img src="image" class="img-fluid"></img>
                        </div>
                    </a>
                </Link>
            </h1>

            <nav>
                {showNav()}
            </nav>
        </header>
    );
}

export default NavBar;
