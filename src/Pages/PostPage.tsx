import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import CartButton from "../Components/UI/CartButton/CartButton";
import VolumeIcon from "../Components/UI/VolumeIcon/VolumeIcon";
import { useAppSelector, useAppDispatch } from "../Redux/hooks";
import "./SCSS/PostPage.scss";
import classNames from "classnames";
import QuantityInput from "../Components/UI/QuantityInput/QuantityInput";
import { addToCart } from "../Redux/Reducers/catalogueSlice";

type Props = {};

function PostPage({}: Props) {
  const { code } = useParams();
  const posts = useAppSelector((state) => state.catalogue.posts);
  // const postPageCounter = useAppSelector((state) => state.shop.postPageCounter);
  const [postPageCounter, setPostPageCounter] = useState(0);
  const post = posts.find((el) => el.code === Number(code));

  const dispatch = useAppDispatch();

  const [isDescriptionShow, setIsDescriptionShow] = useState(true);
  const [isCharacteristicShow, setIsCharacteristicShow] = useState(true);

  let postPageDecrement = () => {
    if (postPageCounter > 0) {
      setPostPageCounter(postPageCounter - 1);
    }
  };

  let postPageIncrement = () => {
    setPostPageCounter(postPageCounter + 1);
  };

  const currentCart = useAppSelector((state) => state.catalogue.currentCart);
  let cartPost;
  let counter = 1;
  if (post !== undefined) {
    cartPost = currentCart.find((el) => el.code === post.code);
    if (cartPost !== undefined) {
      counter = cartPost.quantity;
    }
  }

  let cartButtonClickHandler = (e: React.MouseEvent) => {
    if (post && postPageCounter > 0) {
      dispatch(addToCart({ code: post.code, quantity: postPageCounter }));
    }
  };

  if (!post) {
    return <div>No such post</div>;
  }
  return (
    <div className="post-page container">
      <div className="post-page__breadcrumbs">
        <p className="post-page__breadcrumbs-main">Главная</p>
        <Link className="post-page__breadcrumbs-main" to={"../catalogue"}>
          Каталог
        </Link>
        <Link
          className="post-page__breadcrumbs-add"
          to={"/catalogue/post/" + post.code}
        >
          {post.brand} {post.name}
        </Link>
      </div>
      <main className="post-page__main-info info">
        <div className="info__img">
          <img src="../../img/card-image.png" alt="post image" />
        </div>
        <div className="info__description">
          <span className="info__stock">В наличии</span>
          <div className="info__name">
            <span className="info__name-brand">{post.brand} </span>
            <span className="info__name-tag">{post.name}</span>
          </div>
          <div className="info__volume">
            <VolumeIcon sizeType={post.type}>
              <p>90 г</p>
            </VolumeIcon>
          </div>
          <div className="info__cart-section">
            <h2 className="info__cart-section-price">{post.price} ₸</h2>
            <QuantityInput
              increment={postPageIncrement}
              decrement={postPageDecrement}
              counter={postPageCounter}
            />

            <CartButton onClick={cartButtonClickHandler} />
          </div>
          <div className="info__promo">
            <div className="info__promo-share">
              <a href="#">
                <img src="../../img/share-icon.svg" alt="share icon" />
              </a>
            </div>
            <div className="info__promo-delivery">
              <p>
                При покупке от <span className="price-tag">10 000 ₸</span>{" "}
                бесплатная доставка по Кокчетаву и области
              </p>
            </div>
            <div className="info__promo-price-list">
              <a className="info__promo-price-list-wrapper" href="#">
                <span>
                  <span>Прайс-лист </span>
                  <img
                    src="../../img/download-icon-black.svg"
                    alt="download icon"
                  />
                </span>
              </a>
            </div>
          </div>
          <div className="info__post-description">
            <div>
              <span className="info__post-description-key">Производитель: </span>
              <span className="info__post-description-value">{post.maker}</span>
            </div>
            <div>
              <span className="info__post-description-key">Бренд: </span>
              <span className="info__post-description-value">{post.brand}</span>
            </div>
            <div>
              <span className="info__post-description-key">Артикул: </span>
              <span className="info__post-description-value">460404</span>
            </div>
            <div>
              <span className="info__post-description-key">Штрихкод: </span>
              <span className="info__post-description-value">{post.code}</span>
            </div>
          </div>
          <div className="info__drop-description">
            <h2
              className="info__drop-description-title"
              onClick={() => setIsDescriptionShow(!isDescriptionShow)}
            >
              Описание
              <img
                className={classNames({
                  rotate180: isDescriptionShow,
                })}
                src="../../img/ui-triangle.svg"
                alt=""
              />
            </h2>
            {isDescriptionShow && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                interdum ut justo, vestibulum sagittis iaculis iaculis. Quis
                mattis vulputate feugiat massa vestibulum duis. Faucibus
                consectetur aliquet sed pellentesque consequat consectetur
                congue mauris venenatis. Nunc elit, dignissim sed nulla
                ullamcorper enim, malesuada.
              </p>
            )}
          </div>
          <div className="info__drop-characteristic">
            <h2
              className="info__drop-characteristic-title"
              onClick={() => setIsCharacteristicShow(!isCharacteristicShow)}
            >
              Характеристики
              <img
                className={classNames({
                  rotate180: isCharacteristicShow,
                })}
                src="../../img/ui-triangle.svg"
                alt=""
              />
            </h2>
            {isCharacteristicShow && (
              <div className="info__drop-characteristic-list">
                <div className="info__drop-characteristic-item">
                  <span className="info__drop-characteristic-key">
                    Назначение: {""}
                  </span>
                  <span className="info__drop-characteristic-value">
                    BioMio
                  </span>
                </div>
                <div className="info__drop-characteristic-item">
                  <span className="info__drop-characteristic-key">Тип: </span>
                  <span className="info__drop-characteristic-value">
                    BioMio {""}
                  </span>
                </div>
                <div className="info__drop-characteristic-item">
                  <span className="info__drop-characteristic-key">
                    Производитель: {""}
                  </span>
                  <span className="info__drop-characteristic-value">
                    {post.maker}
                  </span>
                </div>
                <div className="info__drop-characteristic-item">
                  <span className="info__drop-characteristic-key">Бренд: </span>
                  <span className="info__drop-characteristic-value">
                    {post.brand}
                  </span>
                </div>
                <div className="info__drop-characteristic-item">
                  <span className="info__drop-characteristic-key">
                    Артикул:{" "}
                  </span>
                  <span className="info__drop-characteristic-value">
                    {post.code}
                  </span>
                </div>
                <div className="info__drop-characteristic-item">
                  <span className="info__drop-characteristic-key">
                    Штрихкод:{" "}
                  </span>
                  <span className="info__drop-characteristic-value">
                    {post.code}
                  </span>
                </div>
                <div className="info__drop-characteristic-item">
                  <span className="info__drop-characteristic-key">Вес: </span>
                  <span className="info__drop-characteristic-value">90 г</span>
                </div>
                <div className="info__drop-characteristic-item">
                  <span className="info__drop-characteristic-key">Объем: </span>
                  <span className="info__drop-characteristic-value">90 г</span>
                </div>
                <div className="info__drop-characteristic-item">
                  <span className="info__drop-characteristic-key">
                    Кол-во в коробке:{" "}
                  </span>
                  <span className="info__drop-characteristic-value">90 г</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default PostPage;
