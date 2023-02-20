import React, { FC } from "react";
import { ICategory } from "../../../types/ICategory";
import style from "./header.module.css";
import { Link } from "react-router-dom";

interface NavbarProps {
  categories: ICategory[];
}

const Navbar: FC<NavbarProps>= ({ categories }) => {
  return(
    <div>

    </div>
  )
};

export default Navbar;
