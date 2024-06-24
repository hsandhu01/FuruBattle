import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">FuruBattle</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trades">Trades</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-trade">Add Trade</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stock-history">Stock History</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stock-trivia">Stock Trivia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;