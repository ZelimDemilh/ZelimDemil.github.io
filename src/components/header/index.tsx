import React, { useState } from "react";
import DHeader from "./Dheader";
import MHeader from "./Mheader";

const Header = () => {

  const [widthDevice, setWidthDevice] = useState(window.innerWidth)
  window.addEventListener("resize", () => setWidthDevice(window.innerWidth))

  return (
    <div>
      {widthDevice < 768 ? <MHeader/>:<DHeader/>}
    </div>
  );
};

export default Header;