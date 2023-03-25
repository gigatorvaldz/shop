import React from "react";
import "./Cart.scss";

interface CartPropsI {
  total: number;
  price: number;
}

function Cart({ total, price }: CartPropsI) {
  return (
    <div className="lower-header__cart cart">
      <div className="cart__logo">
        <span>{total}</span>
      </div>
      <div className="cart__info">
        <p className="cart__info-name">Корзина</p>
        <p className="cart__info-price">{price} ₸</p>
      </div>
    </div>
  );
}

export default Cart;
