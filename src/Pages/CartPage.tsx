import React from "react";
import CartList from "../Components/CartList/CartList";
import "./SCSS/CartPage.scss";
type Props = {};

function CartPage({}: Props) {
  return (
    <div className="cart-page container">
      <div className="cart-page__breadcrumbs">
        <a href="">
          <span className="cart-page__breadcrumbs-main">Главная</span>
        </a>
        <a href="">
          <span className="cart-page__breadcrumbs-add">Корзина</span>
        </a>
      </div>

      <div className="cart-page__title">
        <h2>Корзина</h2>
      </div>
      <div>
        <CartList />
      </div>

      <div className="cart-page__controls">
        <div className="cart-page__controls-submit">Оформить заказ</div>
        <div className="cart-page__controls-total-price">1 348,76 ₸</div>
      </div>
    </div>
  );
}

export default CartPage;
