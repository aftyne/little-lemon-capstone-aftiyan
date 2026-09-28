import React from "react";
import logo from "./Images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-wrapper">
      <div className="container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Little Lemon Logo" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
