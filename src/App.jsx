import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import ContactPage from "./components/Contact";

import "../src/index.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu(isOpen) {
    setIsMenuOpen(isOpen);
  }

  return (
    <BrowserRouter>
      <Header onToggleMenu={handleToggleMenu} />
      <div className={isMenuOpen ? "content-shift-down" : ""}></div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
