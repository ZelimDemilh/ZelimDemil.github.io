import React, { FC } from "react";
import { ICategory } from "../../models/ICategory";

interface SearchFormProps {
  categories: ICategory[];
}

const SearchForm: FC<SearchFormProps> = ({ categories }) => {
  return (
    <div>
        <i className="bi bi-geo-alt-fill"></i>
        <form>
          <input type="search" placeholder="поиск"/>
        </form>
    </div>
  );
};

export default SearchForm;
