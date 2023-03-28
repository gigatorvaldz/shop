import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer__wrapper">
      <ul className="footer__list container">
        <li>
          <ul className="footer__sublist company-info">
            <li className="company-info__logo">
              <img src="../../img/footer-logo-icon.svg" alt="logo" />
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
                <img src="../../img/download-icon.svg" alt="download icon" />
              </button>
            </li>
            <li className="footer-pricelist__contacts">
              <p>Связь в мессенджерах:</p>
              <a className="footer-pricelist__contacts-wu" href="/#">
                <img src="../../img/wu-icon.svg" alt="social media icon" />
              </a>
              <a className="footer-pricelist__contacts-telegram" href="/#">
                <img src="../../img/telegram-icon.svg" alt="social media icon" />
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
              <p className="contacts-list__contacts-email-description">На связи в любое время</p>
            </li>
            <li>
              <a className="contacts-list__visa" href="/#">
                <img src="../../img/Visa.png" alt="visa icon" />
              </a>
              <a className="contacts-list__mastercard" href="/#">
                <img src="../../img/mastercard-icon.png" alt="mastercard icon" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
