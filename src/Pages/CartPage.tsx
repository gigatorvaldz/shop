import React, { useEffect } from "react";
import CartList from "../Components/CartList/CartList";
import "./SCSS/CartPage.scss";
import { useAppSelector, useAppDispatch } from "../Redux/hooks";
import { resetCart } from "../Redux/Reducers/catalogueSlice";
import BackButton from "../Components/UI/BackButton/BackButton";
import { Link } from "react-router-dom";

function CartPage() {

  const currentCart = useAppSelector((state) => state.catalogue.currentCart);
  const cartPosts = useAppSelector((state) => state.catalogue.cartPosts);
  const posts = useAppSelector((state) => state.catalogue.posts);

  const dispatch = useAppDispatch();

  let totalPrice = 0;

  let updateCartPrice = () => {
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
  };

  updateCartPrice();

  useEffect(() => {
    updateCartPrice();
  }, [currentCart, cartPosts, posts]);

  let onSubmiteHandle = () => {
    if (cartPosts.length > 0) {
      dispatch(resetCart());
      alert("Спасибо за заказ.");
    } else {
      alert("Корзина пуста.");
    }
  };

  return (
    <div data-testid="cart-page-testid" className="cart-page container">
      <div className="cart-page__breadcrumbs desktop-only">
        <a href="">
          <span className="cart-page__breadcrumbs-main">Главная</span>
        </a>
        <a href="">
          <span className="cart-page__breadcrumbs-add">Корзина</span>
        </a>
      </div>
      <div className="mobile-only">
        <Link to="/catalogue">
          <BackButton />
        </Link>
      </div>

      <div className="cart-page__title">
        <h2>Корзина</h2>
      </div>
      <div>
        <CartList />
      </div>

      <div className="cart-page__controls">
        <button
          className="cart-page__controls-submit"
          onClick={onSubmiteHandle}
        >
          Оформить заказ
        </button>
        <div className="cart-page__controls-total-price">{totalPrice} ₸</div>
      </div>
    </div>
  );
}

export default CartPage;
