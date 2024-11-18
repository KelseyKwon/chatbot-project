import React from "react";
import "./Header.css";

function Header({ onClose }) {
  return (
      <div className="header-container">
          <h1 className="header-title">챗봇</h1>
          <button className="header-close" onClick={onClose}>✕</button> {/* X 버튼 클릭 핸들러 */}
      </div>
  );
}

export default Header;