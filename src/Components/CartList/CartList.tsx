import React from "react";
import { useAppSelector } from "../../Redux/hooks";
import CartItem from "../CartItem/CartItem";
import "./CartList.scss"

type Props = {};

function CartList({}: Props) {
  const posts = useAppSelector((state) => state.catalogue.posts);

  return (
    <div className="cart-list">
      <CartItem post={posts[0]} />
      <CartItem post={posts[1]} />
      <CartItem post={posts[2]} />
    </div>
  );
}

export default CartList;
