// Header.js
import React from "react";
import "../assets/style/header.scss";
import logo from "../assets/images/Logo.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/page1">Home</a>
          </li>
          <li>
            <a href="/page1">Page 1</a>
          </li>
          <li>
            <a href="/page1">Page 2</a>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <a href="#">
          
        </a>
      </div>
    </header>
  );
};

export default Header;
