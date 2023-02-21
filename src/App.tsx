import React, { useState } from "react";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/homepage";
import AddCategory from "./components/pages/addCategory";

function App() {
  const [widthDevice, setWidthDevice] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidthDevice(window.innerWidth));

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/add/category" element={<AddCategory/>}/>
      </Routes>
    </div>
  );
}

export default App;
