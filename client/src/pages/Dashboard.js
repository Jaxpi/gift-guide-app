import React from "react";
// import NavBar from "../components/Navbar";
// import logo from '/logo192.png'

export default function Dashboard() {
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
