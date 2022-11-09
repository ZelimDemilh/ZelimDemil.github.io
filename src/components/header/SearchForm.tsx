import React, { FC } from "react";
import { ICategory } from "../../models/ICategory";
import style from "./header.module.css";

interface SearchFormProps {
  categories: ICategory[];
}

const SearchForm: FC<SearchFormProps> = ({ categories }) => {
  return (
    <div >
      </div>
  );
};

export default SearchForm;
