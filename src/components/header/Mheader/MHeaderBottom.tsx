import React, { useState } from "react";

const MHeaderBottom = () => {

  const [value, setValue] = useState("")

  const searchProduct = () => {

  }

  return (
    <form className="header-mobile-panel__bottom">
      <input type="text" placeholder="Поиск" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
      <i className="bi bi-search" onClick={searchProduct}></i>
    </form>
  );
};

export default MHeaderBottom;