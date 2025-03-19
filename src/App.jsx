/*import './App.css'
import Login from './Components/Login/Login';

function App() {
  

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App */


import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { AnimatePresence } from "framer-motion"; // Importe o AnimatePresence

const App = () => {
  const location = useLocation();

  return (
    <>
      <nav style={{ display: "flex", gap: "10px", padding: "10px" }}>
        | <Link to="/home">Home</Link> |
        <Link to="/login">Login</Link> |
      </nav>

      <AnimatePresence mode="wait"> {/* AnimatePresence precisa envolver as rotas */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
