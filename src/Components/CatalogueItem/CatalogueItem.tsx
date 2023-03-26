import React from "react";
import { PostI } from "../../Types/defaultTypes";
import CartButton from "../UI/CartButton/CartButton";
import VolumeIcon from "../UI/VolumeIcon/VolumeIcon";
import "./CatalogueItem.scss";
interface CatalogueItemPropsI {
  post: PostI;
}

function CatalogueItem({ post }: CatalogueItemPropsI) {
  return (
    <div className="post">
      <div className="post__img-wrapper">
        <img className="post__img" src={post.imageUrl} alt="post image" />
      </div>
      <div className="post__description-section">
        <div className="post__name-section">
          <VolumeIcon sizeType={post.type}>
            <p>450 мл</p>
          </VolumeIcon>
          <h2 className="post__name">
            <span className="post__name-brand">{post.brand} </span>
            {post.name}
          </h2>
        </div>

        <div className="post__bottom-description">
          <div className="post__info-section">
            <p className="post__code">
              <span className="post__description-key">Штрихкод:</span>
              <span className="post__description">{post.code}</span>
            </p>
            <p className="post__maker">
              <span className="post__description-key">Производитель:</span>{" "}
              <span className="post__description">{post.maker}</span>
            </p>
            <p className="post__brand">
              <span className="post__description-key">Бренд:</span>{" "}
              <span className="post__description">{post.brand}</span>
            </p>
          </div>

          <div className="post__buy-section">
            <span className="post__price">{post.price} ₸</span>
            <CartButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogueItem;
