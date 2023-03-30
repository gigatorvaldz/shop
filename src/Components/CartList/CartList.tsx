import React from "react";
import { useAppSelector } from "../../Redux/hooks";
import CartItem from "../CartItem/CartItem";
import "./CartList.scss";

type Props = {};

function CartList({}: Props) {
  const posts = useAppSelector((state) => state.catalogue.cartPosts);

  return (
    <div className="cart-list">
      {posts.map((post) => (
        <CartItem key={post.code} post={post} />
      ))}
    </div>
  );
}

export default CartList;
