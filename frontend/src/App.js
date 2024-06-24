import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Portfolio from './components/Portfolio';
import Trades from './components/Trades';
import Leaderboard from './components/Leaderboard';
import AddTrade from './components/AddTrade';
import StockHistory from './components/StockHistory';
import StockTrivia from './components/StockTrivia';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/trades" element={<Trades />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/add-trade" element={<AddTrade />} />
          <Route path="/stock-history" element={<StockHistory />} />
          <Route path="/stock-trivia" element={<StockTrivia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;