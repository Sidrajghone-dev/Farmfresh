import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 
import { useCart } from './Cardcontext';

const Header = () => {
const {state} = useCart();

  return (
    <div
      className="navbar"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
                     url("/farmfreshnavbar.png") center/cover`,
                     
        backgroundSize: 'cover',
        backgroundPosition: 'center 38%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Tractor Image */}
      <div className="tractor-drive">
        <img
          src={`${process.env.PUBLIC_URL}/Finaltractor.png`}
          alt="Tractor"
          className="tractor-img"
        />
      </div>

      {/* Logo */}
      <div className="logo-container">
        <img
          src={`${process.env.PUBLIC_URL}/Farmfreshlogo.png`}
          alt="logo"
          className="logo-img"
        />
        <h1 className="logo">
          Farm Soul <i>🌱 "Naturally Grown and Honesty Served"</i>
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/sell">Sell With Us</Link>
        <Link to="/farmers">Farmers</Link>
        <Link to="/Cart">View Cart ({state.cartItems.length})</Link>
      </nav>
    </div>
  );
};

export default Header;