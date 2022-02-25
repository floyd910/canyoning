import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo_wrapper">
          <Link style={{textDecoration: 'none'}} to="/">
          <h1>
            <strong>AJARA CANYONING</strong>
          </h1>
          <h2>Adventures in Georgia</h2>
          </Link>
        </div>
        <div className="menu_wrapper">
          <Link
            style={{ textDecoration: "none", color: "white", fontSize: "24px" }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white", fontSize: "24px" }}
            to="/tours"
          >
            Tours
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white", fontSize: "24px" }}
            to="/tours"
          >
            About Us
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white", fontSize: "24px" }}
            to="/rpg"
          >
            Contact
          </Link>
          <div className="search_wrapper">
            <div className="search_form">
              <input />
              <div className="div1"></div>
            </div>
          </div>
        </div>
        <div className="burger_wrapper">
          <SwipeableTemporaryDrawer />
        </div>
      </nav>
    </header>
  );
};

export default Header;
