import React, { FC } from "react";

interface MHeaderBottomProps {
  value: string,
  setValue: (text:string) => void
}

const MHeaderBottom: FC<MHeaderBottomProps> = ({value, setValue}) => {

  return (
    <form className="header-mobile-panel__bottom">
      <input type="text" placeholder="Поиск" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
      <i className="bi bi-search"></i>
    </form>
  );
};

export default MHeaderBottom;