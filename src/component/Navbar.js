import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="main-nav">
      <header>
        <div class="navlogo">
          <div class="logo">
            <img src="/images/logo.jpeg" />
          </div>
        </div>

        <div class="navigation">
          <Link to="/home">Home</Link>

          <a href="#">About Us</a>

          <a href="#">Services</a>
          <Link to="/contact">contact</Link>

          <Link to="/volunteer">volunteer</Link>
        </div>
        <label for="check">
          <i class="fas fa-bars menu-btn"></i>
          <i class="fas fa-times close-btn"></i>
        </label>
      </header>
    </section>
  );
}

export default Navbar;
