import React from "react";
import CartList from "../Components/CartList/CartList";
import "./SCSS/CartPage.scss";
import { useAppSelector } from "../Redux/hooks";
type Props = {};

function CartPage({}: Props) {
  const currentCart = useAppSelector((state) => state.catalogue.currentCart);
  const cartPosts = useAppSelector((state) => state.catalogue.cartPosts);

  let totalPrice = 0;

  currentCart.forEach((el) => {
    let res;
    if (cartPosts !== undefined && el !== undefined) {
      res = cartPosts.find((post) => post.code === el.code);
      if (res !== undefined) {
        res = res.price;
        totalPrice += res * el.quantity;
      }
    }
  });

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
        <button className="cart-page__controls-submit">Оформить заказ</button>
        <div className="cart-page__controls-total-price">{totalPrice} ₸</div>
      </div>
    </div>
  );
}

export default CartPage;
