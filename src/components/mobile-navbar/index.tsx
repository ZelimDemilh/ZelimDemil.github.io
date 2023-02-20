import React from "react";
import "./mobile-navbar.scss"
import { Link } from "react-router-dom";

const MNavbar = () => {
  return (
    <div className="mobile-navbar">
      <Link to="/">
        <i className="bi bi-house"></i>
        <span>Главная</span>
      </Link>
      <Link to="/favorites">
        <i className="bi bi-heart"></i>
        <span>Избранное</span>
      </Link>
      <Link to="/search">
        <i className="bi bi-search"></i>
        <span>Поиск</span>
      </Link>
      <Link to="/basket">
        <i className="bi bi-cart2"></i>
        <span>Корзина</span>
      </Link>
      <Link to="/profile">
        <i className="bi bi-person-circle"></i>
        <span>Профиль</span>
      </Link>
    </div>
  );
};

export default MNavbar;