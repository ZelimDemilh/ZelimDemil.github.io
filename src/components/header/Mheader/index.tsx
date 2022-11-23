import React from "react";
import MHeaderTop from "./MHeaderTop";
import MHeaderBottom from "./MHeaderBottom";
import "./mheader.scss"

const MHeader = () => {
  return (
    <div className="header-mobile-panel">
      <MHeaderTop/>
      <MHeaderBottom/>
    </div>
  );
};

export default MHeader;