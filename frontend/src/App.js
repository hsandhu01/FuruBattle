import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Trades from './components/Trades';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import Register from './components/Register';
import AddTrade from './components/AddTrade';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/trades" element={<Trades />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-trade" element={<AddTrade />} />
      </Routes>
    </Router>
  );
}

export default App;