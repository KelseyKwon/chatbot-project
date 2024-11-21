import React from "react";
import "./Header.css";
import botku from '../img/botku.png'

function Header({ onClose }) {
  return (
      <div className="header-container">
          <h1 className="header-title">챗봇</h1>
          <div className="header-close-container" onClick={onClose}>
              <img
                  className="header-close-image"
                  src={botku}
                  alt="Close"
              />
          </div>
      </div>
  );
}

export default Header;