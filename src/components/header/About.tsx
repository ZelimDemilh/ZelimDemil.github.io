import React, { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import style from "./header.module.css";

const About: FC = () => {
  return (
    <div className={style.about}>
     <Link to="/">
       <img src={logo} alt="logo" />
     </Link>
      <Link to="/signIn">
        <div>
          <i className="bi bi-person-circle"></i>
          <button className="text_primary">
            Авторизироваться
          </button>
        </div>
      </Link>
    </div>
  );
};

export default About;