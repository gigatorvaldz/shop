import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../Redux/hooks";
import Cart from "../UI/Cart/Cart";
import SearchInput from "../UI/SearchInput/SearchInput";
import "./Header.scss";
import classNames from "classnames";

interface HeaderPropsI {}

const Header = (props: HeaderPropsI) => {
  const currentCart = useAppSelector((state) => state.catalogue.currentCart);
  const cartPosts = useAppSelector((state) => state.catalogue.cartPosts);

  const [isBurgerActive, setIsBurgerActive] = useState(false);

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
    <div className="header">
      <div className="upper-header__wrapper">
        <div className="container">
          <div className="header__upper-header upper-header">
            <div className="upper-header__about">
              <div className="upper-header__location contacts-block">
                <img src="../../../img/location-icon.svg" alt="location icon" />
                <div className="contacts-block__info">
                  <strong className="contacts-block__info-main">
                    г. Кокчетав, ул. Ж. Ташенова 129Б{" "}
                  </strong>
                  <span className="contacts-block__info-add">
                    (Рынок Восточный)
                  </span>
                </div>
              </div>
              <div className="upper-header__mail contacts-block">
                <img src="../../../img/mail-icon.svg" alt="mail icon" />
                <div className="contacts-block__info">
                  <a
                    className="contacts-block__info-main"
                    href="mailto:opt.sultan@mail.ru"
                  >
                    opt.sultan@mail.ru
                  </a>
                  <span className="contacts-block__info-add">
                    На связи в любое время
                  </span>
                </div>
              </div>
            </div>
            <div className="upper-header__links">
              <nav>
                <ul className="upper-header__link-list">
                  <li>О компании</li>
                  <li>Доставка и оплата</li>
                  <li>Возврат</li>
                  <li>Контакты</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-header__wrapper">
        <div className="container">
          <div className="header__lower-header lower-header">
            <a href="#">
              <img src="../../../img/header-logo.svg" alt="logo" />
            </a>
            <Link to={"/catalogue"} className="lower-header__catalogue-button">
              Каталог{" "}
              <img src="../../../img/catalogue-icon.png" alt="catalogue icon" />
            </Link>
            <div>
              <SearchInput />
            </div>
            <article className="lower-header__contacts">
              <div className="lower-header__contacts-info">
                <a
                  className="lower-header__contacts-phone"
                  href="tel:+7 (777) 490-00-91"
                >
                  +7 (777) 490-00-91
                </a>
                <p className="lower-header__contacts-schedule">
                  время работы: 9:00-20:00
                </p>
                <a
                  className="lower-header__contacts-link"
                  href="#"
                  id="call-link"
                >
                  Заказать звонок
                </a>
              </div>
              <img src="../../img/header-contacts.png" />
            </article>
            <div className="lower-header__pricelist-button-wrapper">
              <button className="lower-header__pricelist-button">
                Прайс-лист
                <img src="../../img/download-icon.svg" alt="download icon" />
              </button>
            </div>
            <Link to="/cart">
              <Cart total={currentCart.length} price={totalPrice} />
            </Link>
          </div>
        </div>
      </div>
      <div className="mobile-header">
        <div className="mobile-header__upper mobile-up">
          <button
            onClick={() => setIsBurgerActive(!isBurgerActive)}
            className="mobile-up__burger burger"
          >
            <span className="burger__content"></span>
          </button>
          <img src="../../../img/header-logo.svg" alt="logo" />
          <Link to="/cart">
            <Cart total={currentCart.length} price={totalPrice} />
          </Link>
        </div>
        <div className="mobile-header__add mobile-add">
          <Link className="mobile-add__catalogue-btn" to="/catalogue">
            <img
              src="../../../img/catalogue-mobile-icon.svg"
              alt="catalogue icon"
            />
            <p>Каталог</p>
          </Link>
          <Link className="mobile-add__search-btn" to="/catalogue">
            <img
              src="../../../img/search-mobile-icon.svg"
              alt="catalogue icon"
            />
            <p>Поиск</p>
          </Link>
        </div>
        <div
          className={classNames(
            {
              "burger-menu": isBurgerActive,
              "burger-menu__non-active": !isBurgerActive,
            },
            "mobile-header__burger-menu"
          )}
        >
          <div className="burger-menu__upper">
            <ul className="burger-menu__contacts-list">
              <li className="burger-menu__contacts-list-item">
                <img src="../../../img/location-icon.svg" alt="location icon" />
                <div className="burger-menu__contacts-list-info">
                  <p className="burger-menu__contacts-list-info-key">
                    г. Кокчетав, ул. Ж. Ташенова 129Б
                  </p>
                  <p className="burger-menu__contacts-list-info-value">
                    (Рынок Восточный)
                  </p>
                </div>
              </li>
              <li className="burger-menu__contacts-list-item">
                <img src="../../../img/mail-icon.svg" alt="mail icon" />
                <div className="burger-menu__contacts-list-info">
                  <a
                    className="burger-menu__contacts-list-info-key"
                    href="mailto:opt.sultan@mail.ru"
                  >
                    opt.sultan@mail.ru
                  </a>
                  <p className="burger-menu__contacts-list-info-value">
                    На связи в любое время
                  </p>
                </div>
              </li>
              <li className="burger-menu__contacts-list-item">
                <img src="../../../img/phone-icon.svg" alt="phone icon" />
                <div className="burger-menu__contacts-list-info">
                  <p className="burger-menu__contacts-list-info-key">
                    Отдел продаж
                  </p>
                  <a
                    className="burger-menu__contacts-list-info-value"
                    href="tel:+7(777)490-00-91"
                  >
                    +7 (777) 490-00-91
                  </a>
                  <p className="burger-menu__contacts-list-info-value">
                    время работы: 9:00-20:00
                  </p>
                </div>
              </li>
              <li>
                <div className="burger-menu__phone-info">
                  <a href="#">
                    <div className="burger-menu__phone-btn">
                      <img
                        src="../../../img/phone-btn-icon.svg"
                        alt="phone icon"
                      />
                    </div>
                  </a>
                  <p>Заказать звонок</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="burger-menu__lower">
            <h2>Меню сайта:</h2>
            <ul>
              <li>О компании</li>
              <li>Доставка и оплата</li>
              <li>Возврат</li>
              <li>Контакты</li>
            </ul>
            <button className="burger-menu__pricelist-button">
              Прайс-лист
              <img src="../../img/download-icon.svg" alt="download icon" />
            </button>
            <div
              className={classNames({
                "burger-menu__active-bg": isBurgerActive,
              })}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
