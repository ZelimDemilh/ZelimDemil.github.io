import React, { FC } from "react";
import style from "./header.module.css";

interface SearchFormProps {
  value: string,
  setValue: (text:string) => void
}


const SearchForm: FC<SearchFormProps> = ({value, setValue}) => {
  return (
    <div>

    </div>
  );  
};

export default SearchForm;
