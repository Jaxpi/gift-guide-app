import React from 'react';
import NavBar from './components/Navbar';
import WishListCard from './components/WishListCard';
import Dashboard from './pages/Dashboard';

// import './App.css';

function App() {
  return (

  <main>
    <section >
      <NavBar />
      <Dashboard />
      <WishListCard />
      {/* <About /> */}
      {/* <Contact /> */}

    </section>
  </main>

  );
}

export default App;