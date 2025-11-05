import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + Tagline */}
        <div className="footer-logo">
          <img src="/Farmfreshlogo.png" alt="Farm Soul Logo" />
          <h3>Farm Soul 🌱</h3>
          <p>"Naturally Grown and Honesty Served"</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/farmers">Farmers</Link>
          <Link to="/sell">Sell With Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 Pune, Maharashtra, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@farmsoul.com</p>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe for fresh updates from farmers</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Farm Soul. All rights reserved.</p>
        <p>Made with ❤️ in India</p>
      </div>
    </footer>
  );
};

export default Footer;
