import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"
import style from "./header.module.css";
import { useAppSelector } from "../../../hooks/hooks";

const About = () => {

  const basket = useAppSelector(state => state.BasketSlice.basket)

  return (
    <div className={style.about}>
    </div>
  );
};

export default About;