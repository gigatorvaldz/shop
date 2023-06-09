import React from "react";
import "./Footer.scss";

import footerLogo from "../../img/footer-logo-icon.svg";
import downloadIcon from "../../img/download-icon.svg";
import wuIcon from "../../img/wu-icon.svg";
import telegramIcon from "../../img/telegram-icon.svg";
import visaIcon from "../../img/Visa.png";
import mastercardIcon from "../../img/mastercard-icon.png";

function Footer() {
  return (
    <div>
      <div className="footer__wrapper">
        <ul className="footer__list container">
          <li>
            <ul className="footer__sublist company-info">
              <li className="company-info__logo">
                <img src={footerLogo} alt="logo" />
              </li>
              <li className="company-info__description">
                <p>
                  Компания «Султан» — снабжаем розничные магазины товарами "под
                  ключ" в Кокчетаве и Акмолинской области
                </p>
              </li>
              <li className="company-info__input-item">
                <label className="input-email__label" htmlFor="">
                  Подпишись на скидки и акции
                </label>
                <div className="company-info__input input-email__wrapper">
                  <input
                    className="input-email"
                    type="text"
                    placeholder="Введите ваш E-mail"
                  />
                </div>
              </li>
            </ul>
          </li>
          <li>
            <ul className="footer__sublist footer-menu">
              <li>
                <h2>Меню сайта:</h2>
              </li>
              <li>
                <a href="/#">О компании</a>
              </li>
              <li>
                <a href="/#">Доставка и оплата</a>
              </li>
              <li>
                <a href="/#">Возврат</a>
              </li>
              <li>
                <a href="/#">Контакты</a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="footer__sublist footer-category">
              <li>
                <h2>Категории:</h2>
              </li>
              <li>
                <a href="/#">Бытовая химия</a>
              </li>
              <li>
                <a href="/#">Косметика и гигиена</a>
              </li>
              <li>
                <a href="/#">Товары для дома</a>
              </li>
              <li>
                <a href="/#">Товары для детей и мам</a>
              </li>
              <li>
                <a href="/#">Посуда</a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="footer__sublist footer-pricelist">
              <li className="pricelist-block">
                <h2>Скачать прайс-лист:</h2>
                <button className="pricelist-button">
                  Прайс-лист
                  <img src={downloadIcon} alt="download icon" />
                </button>
              </li>
              <li className="footer-pricelist__contacts">
                <p>Связь в мессенджерах:</p>
                <a className="footer-pricelist__contacts-wu" href="/#">
                  <img src={wuIcon} alt="social media icon" />
                </a>
                <a className="footer-pricelist__contacts-telegram" href="/#">
                  <img
                    src={telegramIcon}
                    alt="social media icon"
                  />
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="footer__sublist contacts-list">
              <li>
                <h2>Контакты:</h2>
              </li>
              <li className="contacts-links__item">
                <a
                  className="contacts-list__contacts-phone"
                  href="tel:+7 (777) 490-00-91"
                >
                  +7 (777) 490-00-91
                </a>
                <p className="contacts-list__contacts-schedule">
                  время работы: 9:00-20:00
                </p>
                <a
                  className="contacts-list__contacts-link"
                  href="/#"
                  id="call-link"
                >
                  Заказать звонок
                </a>
              </li>
              <li className="contacts-links__item">
                <a
                  className="contacts-list__contacts-email"
                  href="mailto:opt.sultan@mail.ru"
                >
                  opt.sultan@mail.ru
                </a>
                <p className="contacts-list__contacts-email-description">
                  На связи в любое время
                </p>
              </li>
              <li>
                <a className="contacts-list__visa" href="/#">
                  <img src={visaIcon} alt="visa icon" />
                </a>
                <a className="contacts-list__mastercard" href="/#">
                  <img
                    src={mastercardIcon}
                    alt="mastercard icon"
                  />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footer-mobile">
        <div className="footer-mobile__logo-block">
          <img src={footerLogo} alt="logo" />
          <button className="pricelist-button">
            Прайс-лист
            <img src={downloadIcon} alt="download icon" />
          </button>
        </div>
        <p className="company-info__description footer-mobile__description-block">
          Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в
          Кокчетаве и Акмолинской области
        </p>
        <div className="footer-mobile__email-block">
          <label className="input-email__label" htmlFor="">
            Подпишись на скидки и акции
          </label>
          <div className="company-info__input input-email__wrapper">
            <input
              className="input-email"
              type="text"
              placeholder="Введите ваш E-mail"
            />
          </div>
          <div className="footer-mobile__list-block">
            <ul className="footer__sublist footer-menu">
              <li>
                <h2>Меню сайта:</h2>
              </li>
              <li>
                <a href="/#">О компании</a>
              </li>
              <li>
                <a href="/#">Доставка и оплата</a>
              </li>
              <li>
                <a href="/#">Возврат</a>
              </li>
              <li>
                <a href="/#">Контакты</a>
              </li>
            </ul>
            <ul className="footer__sublist footer-category">
              <li>
                <h2>Категории:</h2>
              </li>
              <li>
                <a href="/#">Бытовая химия</a>
              </li>
              <li>
                <a href="/#">Косметика и гигиена</a>
              </li>
              <li>
                <a href="/#">Товары для дома</a>
              </li>
              <li>
                <a href="/#">Товары для детей и мам</a>
              </li>
              <li>
                <a href="/#">Посуда</a>
              </li>
            </ul>
          </div>
          <div className="footer-mobile__contacts-block">
            <ul className="contacts-list">
              <li>
                <h2 className="footer-mobile__contacts-title">Контакты:</h2>
              </li>
              <li className="contacts-links__item footer-mobile__contacts-upper-block">
                <a
                  className="contacts-list__contacts-phone"
                  id="contacts-list__contacts-phone-mobile"
                  href="tel:+7 (777) 490-00-91"
                >
                  +7 (777) 490-00-91
                </a>
                <p className="contacts-list__contacts-schedule">
                  время работы: 9:00-20:00
                </p>
                <a
                  className="contacts-list__contacts-link"
                  href="/#"
                  id="call-link-mobile"
                >
                  Заказать звонок
                </a>
              </li>
              <li className="contacts-links__item footer-mobile__contacts-lower-block">
                <a
                  className="contacts-list__contacts-email"
                  id="contacts-list__contacts-email-mobile"
                  href="mailto:opt.sultan@mail.ru"
                >
                  opt.sultan@mail.ru
                </a>
                <p className="contacts-list__contacts-email-description">
                  На связи в любое время
                </p>
              </li>
              <li className="mobile-payment">
                <a className="contacts-list__visa" href="/#">
                  <img src={visaIcon} alt="visa icon" />
                </a>
                <a className="contacts-list__mastercard" href="/#">
                  <img
                    src={mastercardIcon}
                    alt="mastercard icon"
                  />
                </a>
              </li>
            </ul>
            <div>
              <p>Связь в мессенджерах:</p>
              <div className="mobile-socials">
                <a className="footer-pricelist__contacts-wu" href="/#">
                  <img src={wuIcon} alt="social media icon" />
                </a>
                <a className="footer-pricelist__contacts-telegram" href="/#">
                  <img
                    src={telegramIcon}
                    alt="social media icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
