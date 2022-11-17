import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import style from "./header.module.css";
import { useAppSelector } from "../../hooks/hooks";

const About = () => {

  const basket = useAppSelector(state => state.BasketSlice.basket)

  return (
    <div className={style.about}>
     <Link to="/">
       <img src={logo} alt="logo" />
     </Link>
      <div>
        <Link to="/favorites"><i className="bi bi-heart"></i></Link>
        <Link to="/signIn"><i className="bi bi-person-circle"></i></Link>
        <Link to="/basket"><i className="bi bi-basket3"></i><span> {basket.length} </span></Link>
      </div>
    </div>
  );
};

export default About;