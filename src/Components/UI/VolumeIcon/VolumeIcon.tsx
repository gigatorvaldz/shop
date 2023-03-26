import React from "react";
import { sizeType } from "../../../Types/defaultTypes";
import "./VolumeIcon.scss"

interface VolumeIconProps {
  sizeType: sizeType;
  children: React.ReactNode;
}

const VolumeIcon = ({ children, sizeType }: VolumeIconProps) => {
  return (
    <span className="VolumeIcon">
      <img src={`./img/${sizeType}.svg`} alt={`${sizeType} icon`} />
      {children}
    </span>
  );
};

export default VolumeIcon;
