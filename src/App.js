import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(true); // 창 열림 상태 관리

  if (!isOpen) return null; // 닫힌 상태에서는 아무것도 렌더링하지 않음

  return (
      <div className="app-container">
          <Header onClose={() => setIsOpen(false)} /> {/* X 버튼 클릭 시 창 닫힘 */}
          <Body />
          <Footer />
      </div>
  );
}

export default App;