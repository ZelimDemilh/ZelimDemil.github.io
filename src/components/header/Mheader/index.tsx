import React, { FC } from "react";
import MHeaderTop from "./MHeaderTop";
import MHeaderBottom from "./MHeaderBottom";
import "./mheader.scss"

interface MHeaderProps {
  value: string,
  setValue: (text:string) => void
}

const MHeader: FC<MHeaderProps> = ( {setValue, value} ) => {
  return (
    <div className="header-mobile-panel">
      <MHeaderTop/>
      <MHeaderBottom value={value} setValue={setValue}/>
    </div>
  );
};

export default MHeader;