import React from "react";
import { PostI } from "../../Types/defaultTypes";
import QuantityInput from "../UI/QuantityInput/QuantityInput";
import VolumeIcon from "../UI/VolumeIcon/VolumeIcon";
import "./CartItem.scss";

interface CartItemI {
  post: PostI;
}

function CartItem({ post }: CartItemI) {
  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={post.imageUrl} alt="post image" />
      </div>
      <div className="cart-item__info">
        <VolumeIcon sizeType={post.type}>
          <p>450 мл</p>
        </VolumeIcon>
        <h2 className="cart-item__title">
          {post.brand} {post.name}
        </h2>
        <div className="cart-item__post-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis
            vulputate feugiat massa vestibulum duis.
          </p>
        </div>
      </div>
      <div className="cart-item__cart-info">
        <div className="cart-item__quantity">
          <QuantityInput />
        </div>
        <h2 className="cart-item__price">{post.price + "₸"}</h2>
        <div className="cart-item__button-wrapper">
          <button className="cart-item__button">
            <img
              width={60}
              height={60}
              src="./img/delete-icon.svg"
              alt="delete icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
