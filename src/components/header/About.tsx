import React, { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import style from "./header.module.css";

const About: FC = () => {
  return (
    <div className={style.about}>
      <img src={logo} alt="logo" />
      <Link to="#">
        <div>
          <i className="bi bi-person-circle"></i>
          <button>
            Авторизироваться
          </button>
        </div>
      </Link>
    </div>
  );
};

export default About;