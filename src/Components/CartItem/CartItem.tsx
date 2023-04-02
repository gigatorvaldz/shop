import React from "react";
import {
  incrementCartItemQuantity,
  removeFromCart,
  decrementCartItemQuantity,
} from "../../Redux/Reducers/catalogueSlice";
import { PostI } from "../../Types/defaultTypes";
import QuantityInput from "../UI/QuantityInput/QuantityInput";
import VolumeIcon from "../UI/VolumeIcon/VolumeIcon";
import "./CartItem.scss";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { Link } from "react-router-dom";

import deleteIcon from "../../img/delete-icon.svg"

interface CartItemI {
  post: PostI;
}

function CartItem({ post }: CartItemI) {
  const dispatch = useAppDispatch();
  const currentCart = useAppSelector((state) => state.catalogue.currentCart);

  let cartPost = currentCart.find((el) => el.code === post.code);
  let counter = cartPost?.quantity;

  if (!counter) counter = 1;

  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={require(`../../img/${post.imageUrl}`)} alt="post image" />
      </div>
      <div className="cart-item__info">
        <VolumeIcon sizeType={post.type}>
          <p>450 мл</p>
        </VolumeIcon>

        <Link to={`/catalogue/post/${post.code}`}>
          <h2 className="cart-item__title">
            {post.brand} {post.name}
          </h2>
        </Link>

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
          <QuantityInput
            increment={() => dispatch(incrementCartItemQuantity(post.code))}
            decrement={() => dispatch(decrementCartItemQuantity(post.code))}
            counter={counter}
          />
        </div>
        <h2 className="cart-item__price">{post.price * counter + "₸"}</h2>
        <div className="cart-item__button-wrapper">
          <button
            className="cart-item__button"
            onClick={() => dispatch(removeFromCart(post.code))}
          >
            <img
              width={60}
              height={60}
              src={deleteIcon}
              alt="delete icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
