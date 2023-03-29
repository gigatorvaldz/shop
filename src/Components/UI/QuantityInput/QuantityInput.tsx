import React from "react";
import "./QuantityInput.scss";

type Props = {};

function QuantityInput({}: Props) {
  return (
    <div className="quantity">
      <button className="quantity-btn">-</button>
      <p>1</p>
      <button className="quantity-btn">+</button>
    </div>
  );
}

export default QuantityInput;
