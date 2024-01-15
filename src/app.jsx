import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import React from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;