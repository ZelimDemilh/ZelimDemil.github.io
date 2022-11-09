import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <div className="app">
      <Header />
        <Routes>
            <Route path="/" element={<div>home</div>}/>
        </Routes>
    </div>
  );
}

export default App;
