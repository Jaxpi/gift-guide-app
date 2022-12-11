// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CreateWishList from './components/CreateWishList'
import Dashboard from './pages/Dashboard';
import Navigation from './components/Navbar';

function App() {
  return (
    <div className="App">
           <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Navigation />
          <Routes>
            <Route 
              path="/" 
              element={<Dashboard />}
            />
            <Route 
              path="/createwishlist" 
              element={<CreateWishList />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
