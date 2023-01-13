import React, { useState } from "react";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/homepage";

function App() {
  const [widthDevice, setWidthDevice] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidthDevice(window.innerWidth));

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
