import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(true); 

  if (!isOpen) return null; 
  return (
      <div className="app-container">
          <Header onClose={() => setIsOpen(false)} />
          <Body />
        
      </div>
  );
}

export default App;