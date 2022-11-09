import React, { useEffect } from "react";
import { getCategories } from "../../store/reducers/category/categoryFunc";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import SearchForm from "./SearchForm";
import Navbar from "./Navbar";
import About from "./About";

const Header = () => {
  const { categories, isLoading, error } = useAppSelector(
    (state) => state.CategorySlice
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  console.log(categories);
  return (
    <div>
      <About/>
      <SearchForm categories={categories} />
      <Navbar />
    </div>
  );
};

export default Header;
