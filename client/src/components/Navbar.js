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
