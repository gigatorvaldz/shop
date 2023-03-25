import React from "react";
import { useAppSelector } from "../../Redux/hooks";
import Cart from "../UI/Cart/Cart";
import "./Header.scss";

interface HeaderPropsI {}

const Header = (props: HeaderPropsI) => {
  const cartTotal = useAppSelector((state) => state.shop.cartTotal);
  const priceTotal = useAppSelector((state) => state.shop.priceTotal);

  return (
    <div className="header">
      <div className="upper-header__wrapper">
        <div className="container">
          <div className="header__upper-header upper-header">
            <div className="upper-header__about">
              <div className="upper-header__location contacts-block">
                <img src="./img/location-icon.svg" alt="location icon" />
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
                <img src="./img/mail-icon.svg" alt="mail icon" />
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
              <img src="./img/header-logo.svg" alt="logo" />
            </a>
            <a href="#" className="lower-header__catalogue-button">
              Каталог{" "}
              <img src="./img/catalogue-icon.png" alt="catalogue icon" />
            </a>
            <div className="lower-header__search-input-wrapper">
              <input
                className="lower-header__search-input"
                type="text"
                placeholder="Поиск..."
              />
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
              <img src="./img/header-contacts.png" />
            </article>
            <div className="lower-header__pricelist-button-wrapper">
              <button className="lower-header__pricelist-button">
                Прайс-лист
                <img src="./img/download-icon.svg" alt="download icon" />
              </button>
            </div>
            <Cart total={cartTotal} price={priceTotal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
