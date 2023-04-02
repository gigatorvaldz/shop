import React from "react";
import { Link } from "react-router-dom";
import "./SCSS/ErrorPage.scss";
import catalogueIcon from "../img/catalogue-icon.png";

interface ErrorPropsI {
  error?: string;
}

const ErrorPage = ({ error }: ErrorPropsI) => {
  return (
    <div className="error-page">
      {error ? <p>{error}</p> : <p>Такой страницы нет</p>}

      <Link className="error-page__catalogue-button" to="/catalogue">
        <img src={catalogueIcon} alt="catalogue icon" />
        <p>Каталог</p>
      </Link>
    </div>
  );
};

export default ErrorPage;
