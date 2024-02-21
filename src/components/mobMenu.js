import React from "react";
import "../assets/style/menu.scss"; // Import your CSS file for styling

function MobMenu({ isOpen, onClose }) {
  return (
    <div className={`menu ${isOpen ? "open" : ""}`}>
      <div className="menu-content">
        <div  className="close-button">
        <button onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        </div>
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
      </div>
    </div>
  );
}

export default MobMenu;
