import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navigation from './components/Navbar'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
           <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Navigation />
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
            <Route 
              path="/matchup" 
              element={<Home />}
            />
            <Route 
              path="/matchup/:id" 
              element={<Home />}
            />
            <Route 
              path="*"
              element={<Home />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
