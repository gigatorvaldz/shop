import React from "react";
import "./BackButton.scss"
import backArrow from "../../../img/back-arrow.svg";

type Props = {};

function BackButton({}: Props) {
  return (
    <div className="back-btn">
      <div className="back-btn__img-wrapper">
        <img src={backArrow} alt="back icon" />
      </div>
      <p className="back-btn__label">Назад</p>
    </div>
  );
}

export default BackButton;
