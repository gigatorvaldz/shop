import React from "react";
import "./Cart.scss";
import classNames from "classnames";

interface CartPropsI {
  total: number;
  price?: number;
}

function Cart({ total, price = -1 }: CartPropsI) {
  return (
    <div data-testid="cart-test-id" className="lower-header__cart cart">
      <div className="cart__logo">
        <span>{total}</span>
      </div>
      <div
        className={classNames(
          {
            "visually-hidden": price < 0,
          },
          "cart__info"
        )}
      >
        <p className="cart__info-name">Корзина</p>
        <p className="cart__info-price">{price} ₸</p>
      </div>
    </div>
  );
}

export default Cart;
