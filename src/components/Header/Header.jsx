import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo_wrapper">
          <h1>
            <strong>AJARA CANYONING</strong>
          </h1>
          <h2>Adventures in Georgia</h2>
        </div>
        <div className="menu_wrapper">
          <Link
            style={{ textDecoration: "none", color: "white", fontSize: "24px" }}
            to="/rpg"
          >
            Tours
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white", fontSize: "24px" }}
            to="/rpg"
          >
            About Us
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white", fontSize: "24px" }}
            to="/rpg"
          >
            Work With Me
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white", fontSize: "24px" }}
            to="/rpg"
          >
            More
          </Link>
          <div className="search_wrapper">
            <div className="search_form">
              <input />
              <div class="div1"></div>
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
