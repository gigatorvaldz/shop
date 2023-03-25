import React from "react";
import { PostI } from "../../Types/defaultTypes";
interface CatalogueItemPropsI {
  post: PostI;
}

function CatalogueItem({ post }: CatalogueItemPropsI) {
  console.log(post.imageUrl);

  return (
    <div className="post__wrapper">
      <img src={post.imageUrl} alt="post image" />
      <h1>Make Volume Component</h1>
      <h2>{post.name}</h2>
      <p>Штрихкод: {post.code}</p>
      <p>Производитель: {post.maker}</p>
      <p>Бренд: {post.brand}</p>
      <span>{post.price}</span>
      <button>В КОРЗИНУ</button>
    </div>
  );
}

export default CatalogueItem;
