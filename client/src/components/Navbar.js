import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

handleAuth = () => {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
    } else {
    }
}
const authButton = () => {
    const { isLoggedIn } = this.state;
    return (
        <button onClick={handleAuth}>
            {isLoggedIn ? 'Logout' : 'Login'}
        </button>
    )
};
function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav=container">
                    <NavLink exact to="./assets/images/logotrans.png" className="nav-logo">
                        GiftGuide
                        <i className="fas fa-code"></i>
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>

                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default NavBar;