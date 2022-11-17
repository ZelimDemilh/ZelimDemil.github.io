import React, { FC } from "react";
import { ICategory } from "../../models/ICategory";
import style from "./header.module.css";
import { Link } from "react-router-dom";

interface NavbarProps {
  categories: ICategory[];
}

const Navbar: FC<NavbarProps>= ({ categories }) => {
  return(
    <div className={style.navBar}>
      <Link to='/category/all'>
        Все товары
      </Link>
      {categories.map(category => {
        return(
          <Link to={`/category/${category._id}`} key={category._id}>
            {category.name}
          </Link>
        )
      })}
    </div>
  );
};

export default Navbar;
