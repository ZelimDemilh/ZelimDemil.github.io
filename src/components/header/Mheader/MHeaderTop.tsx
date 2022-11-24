import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"

const MHeaderTop = () => {
  return (
    <div className="header-mobile-panel__top">
      <div className="header-mobile-panel__logo">
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </div>
      {/*<div className="header-mobile-panel__personal">*/}
      {/*  */}
      {/*</div>*/}
      <div className="header-mobile-panel__basket">
        <Link to="/profile"><i className="bi bi-person-circle"></i></Link>
        <Link to="/favorites"><i className="bi bi-heart"></i></Link>
        <Link to="/basket"><i className="bi bi-cart2"></i></Link>
        {/*<Link to="/#"><i className="bi bi-whatsapp"></i></Link>*/}
      </div>
    </div>
  );
};

export default MHeaderTop;