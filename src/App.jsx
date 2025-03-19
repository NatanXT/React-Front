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
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './components/Login/Login';

const App = () => {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
