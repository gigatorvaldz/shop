import React from "react";
import "./CartButton.scss"

interface CartButtonPropsI {}

function CartButton({}: CartButtonPropsI) {
  return (
    <button className="cart-button">
      <span>В КОРЗИНУ</span>
      <img src="./img/cart-btn-icon.svg" alt="cart icon" />
    </button>
  );
}

export default CartButton;
