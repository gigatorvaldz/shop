import React from "react";
import "./CartButton.scss";
import cartBtnIcon from "../../../img/cart-btn-icon.svg";

interface CartButtonPropsI {
  onClick: (e: React.MouseEvent) => void;
}

function CartButton({ onClick }: CartButtonPropsI) {
  return (
    <button
      data-testid="cart-btn-testid"
      className="cart-button"
      onClick={onClick}
    >
      <span>В КОРЗИНУ</span>
      <img src={cartBtnIcon} alt="cart icon" />
    </button>
  );
}

export default CartButton;
