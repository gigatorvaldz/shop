import React from "react";
import { PostI } from "../../Types/defaultTypes";
import CatalogueItem from "../CatalogueItem/CatalogueItem";
import "./CatalogueList.scss";

interface CatalogueListPropsI {
  posts: Array<PostI>;
}

function CatalogueList({ posts, ...props }: CatalogueListPropsI) {
  if (!posts || posts.length < 1) {
    return <div data-testid="catalogue-error" className="catalogue-error">Товары не найдены.</div>;
  }

  return (
    <div className="catalogue-list">
      {posts.map((el) => (
        <CatalogueItem key={el.code} post={el} />
      ))}
    </div>
  );
}

export default CatalogueList;
