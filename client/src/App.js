// import React, { useEffect } from "react";
// import NavBar from './components/Navbar';

import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Create from "./pages/Create"
import Signup from "./pages/Signup";
import SignupForm from "./components/SignupForm";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import "./App.css";
import WishListCard from "./components/WishListCard";
// import { io } from "socket.io-client";
// import WishListCard from "./components/WishListCard";

const httpLink = createHttpLink({
  uri: "/graphql",
});

// const socket = io();

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [isConnected, setIsConnected] = useState(socket.connected);
  // React.useEffect(() => {
  //   socket.on('connect', () => {
  //     // setIsConnected(true);
  //     console.log("connected")
  //   });

  //   socket.on('disconnect', () => {
  //     // setIsConnected(false);
  //   });

  //   socket.on('pong', () => {
  //     // setLastPong(new Date().toISOString());
  //   });

    // return () => {
    //   socket.off('connect');
    //   socket.off('disconnect');
    //   socket.off('pong');
    // };
  // }, []);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/create" element={<Create />} />
              <Route path="/me" element={<Home />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
