import React from "react";
import { PostI } from "../../Types/defaultTypes";

interface CatalogueItemPropsI {
  post: PostI;
}

function CatalogueItem({ post }: CatalogueItemPropsI) {
  return (
    <div>
      CatalogueItem:
      <h1>{post.name}</h1>
    </div>
  );
}

export default CatalogueItem;
