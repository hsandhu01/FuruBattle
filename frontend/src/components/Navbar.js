import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #2c2c2c;
  padding: 1rem 2rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const StyledNavLink = styled(NavLink)`
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover, &.active {
    color: #3498db;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem><StyledNavLink to="/" end>FuruBattle</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/portfolio">Portfolio</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/trades">Trades</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/leaderboard">Leaderboard</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/add-trade">Add Trade</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/stock-history">Stock History</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/stock-trivia">Stock Trivia</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/login">Login</StyledNavLink></NavItem>
        <NavItem><StyledNavLink to="/register">Register</StyledNavLink></NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
