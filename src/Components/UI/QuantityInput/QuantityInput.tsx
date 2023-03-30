import React from "react";
import "./QuantityInput.scss";

interface quantityInputI {
  decrement: (e: React.MouseEvent) => void;
  increment: (e: React.MouseEvent) => void;
  counter?: number;
}

function QuantityInput({ decrement, increment, counter = 1 }: quantityInputI) {
  return (
    <div className="quantity">
      <button onClick={decrement} className="quantity-btn">
        -
      </button>
      <p>{counter}</p>
      <button onClick={increment} className="quantity-btn">
        +
      </button>
    </div>
  );
}

export default QuantityInput;
