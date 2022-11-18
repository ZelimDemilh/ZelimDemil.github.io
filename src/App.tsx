import React, { useState } from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import Header from "./components/header";

function App() {

  return (
    <div className="app">
      <Header/>
        <Routes>
        </Routes>
    </div>
  );
}

export default App;
