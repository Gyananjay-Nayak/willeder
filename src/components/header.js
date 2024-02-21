// Header.js
import React, { useState } from "react";
import "../assets/style/header.scss";
import logo from "../assets/images/Logo.svg";
import MobMenu from "./mobMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
      <div className="hamburger" onClick={toggleMenu}>
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="2" fill="#6A45FF" />
          <rect y="7" width="20" height="2" fill="#6A45FF" />
          <rect y="14" width="20" height="2" fill="#6A45FF" />
        </svg>
      </div>
      <MobMenu isOpen={showMenu} onClose={toggleMenu} />
    </header>
  );
};

export default Header;
