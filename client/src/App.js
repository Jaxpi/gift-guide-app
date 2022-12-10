import React from "react";
// import NavBar from './components/Navbar';
import Dashboard from "./pages/Dashboard";
import "./App.css";
import WishListCard from "./components/WishListCard";

function App() {
  return (
    <main>
      <section class="navbar">{/* <NavBar /> */}</section>
      <section class="dashboard">
        <Dashboard />
      </section>
      <section class="cardContainer">
        <WishListCard />
      </section>

      <div id="under">Under Construction</div>
      {/* <About /> */}
      {/* <Contact /> */}
    </main>
  );
}

export default App;
