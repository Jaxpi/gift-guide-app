import React, { useEffect } from "react";
// import NavBar from './components/Navbar';
import Dashboard from "./pages/Dashboard";
import "./App.css";
// import WishListCard from "./components/WishListCard";
import ThemeComponent from "./components/ThemeComponent";
import ThemeProvider, { ThemeContext } from "./utils/ThemeContext";

// NAVBAR IMPORTS
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.title = "Module 22.1: useReducer";
  }, []);

  return (
    // NAVBAR CONNECTIONS -- NEED HELP WITH THIS - Hasan
   /* <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component = {Dashboard} />
      </Routes>
    </Router> */


    <main>
      <section class="navbar">{/* <NavBar /> */}</section>
      <section class="dashboard">
        <Dashboard />
      </section>
      <div id="under">Under Construction</div>
      {/* <section class="cardContainer">
        <WishListCard />
      </section> */}
      <ThemeProvider className="themeProvider">
        <ThemeComponent />
      </ThemeProvider>
    </main>
  );
}

export default App;
