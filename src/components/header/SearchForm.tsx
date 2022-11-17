import React, { FC } from "react";
import style from "./header.module.css";

interface SearchFormProps {
  value: string,
  setValue: (text:string) => void
}

const SearchForm: FC<SearchFormProps>= ({value, setValue}) => {
  return (
    <div className={style.searchForm}>
        <div>
          <i className="bi bi-geo-alt-fill"></i>
          <span>Грозный, ТРЦ "Беркат"</span>
        </div>
        <form>
          <input type="text" placeholder="поиск" value={value} onChange={(e) => setValue(e.target.value)}/>
          <i className="bi bi-search"></i>
        </form>
    </div>
  );
};

export default SearchForm;
