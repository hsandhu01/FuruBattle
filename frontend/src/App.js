import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Portfolio from './components/Portfolio';
import Trades from './components/Trades';
import Leaderboard from './components/Leaderboard';
import AddTrade from './components/AddTrade';
import StockHistory from './components/StockHistory';
import StockTrivia from './components/StockTrivia'; // Import StockTrivia
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/trades" element={<Trades />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/add-trade" element={<AddTrade />} />
          <Route path="/stock-history" element={<StockHistory />} />
          <Route path="/trivia" element={<StockTrivia />} /> {/* Add StockTrivia route */}
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;