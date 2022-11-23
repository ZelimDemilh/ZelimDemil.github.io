import React, { useState } from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import Header from "./components/header";
import MNavbar from "./components/mNavbar";


function App() {

  const [widthDevice, setWidthDevice] = useState(window.innerWidth)
  window.addEventListener("resize", () => setWidthDevice(window.innerWidth))

  return (
    <div className="app">
      <Header/>
      {
        widthDevice < 768 ? (
          <MNavbar/>
        ) : (
          2
        )
      }
    </div>
  );
}

export default App;
