import React, { useEffect, useState } from "react";
import { getCategories } from "../../store/reducers/category/categoryFunc";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import SearchForm from "./SearchForm";
import Navbar from "./Navbar";
import About from "./About";
import style from "./header.module.css";

const Header = () => {
  const dispatch = useAppDispatch();

  const [formValue, setFormValue] = useState<string>("")

  const handleFormValue = (text: string) => {
    setFormValue(text)
  }

  const { categories, isLoading, error } = useAppSelector(
    (state) => state.CategorySlice
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className={style.header}>
      <About/>
      <SearchForm value={formValue} setValue={handleFormValue}/>
      <Navbar categories={categories}/>
    </div>
  );
};

export default Header;
