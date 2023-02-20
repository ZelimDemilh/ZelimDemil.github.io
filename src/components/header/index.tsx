import React, { useState } from "react";
import DHeader from "./Dheader";
import MHeader from "./Mheader";
import MNavbar from "../mobile-navbar";

const Header = () => {
  const [value, setValue] = useState("");

  const [widthDevice, setWidthDevice] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidthDevice(window.innerWidth));

  return widthDevice < 768 ? (
    <div>
      <MHeader value={value} setValue={setValue} />
      <MNavbar />
    </div>
) : (
    <DHeader />
  );
};

export default Header;
