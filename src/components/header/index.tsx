import React, { useState } from "react";
import DHeader from "./Dheader";
import MHeader from "./Mheader";

const Header = () => {

  const [widthDevice, setWidthDevice] = useState(window.innerWidth)
  window.addEventListener("resize", () => setWidthDevice(window.innerWidth))

  return widthDevice < 768 ? <MHeader/>:<DHeader/>
};

export default Header;