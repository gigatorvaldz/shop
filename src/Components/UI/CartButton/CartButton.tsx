import React from "react";
import "./CartButton.scss";
import { useAppDispatch } from "../../../Redux/hooks";
import { addToCart } from "../../../Redux/Reducers/catalogueSlice";
import cartBtnIcon from "../../../img/cart-btn-icon.svg"

interface CartButtonPropsI {
  onClick: (e: React.MouseEvent) => void;
}

function CartButton({ onClick }: CartButtonPropsI) {
  const dispatch = useAppDispatch();

  return (
    <button
      className="cart-button"
      onClick={onClick}
    >
      <span>В КОРЗИНУ</span>
      <img src={cartBtnIcon} alt="cart icon" />
    </button>
  );
}

export default CartButton;
