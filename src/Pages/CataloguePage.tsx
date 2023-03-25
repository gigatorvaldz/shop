import React from "react";
import CatalogueList from "../Components/CatalogueList/CatalogueList";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { cartIncrement } from "../Redux/Reducers/shopSlice";

interface CataloguePageProps {}

const CataloguePage = (props: CataloguePageProps) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.catalogue.posts);
  const cartTotal = useAppSelector((state) => state.shop.cartTotal);

  return (
    <div>
      Catalogue Page
      {cartTotal}
      <button onClick={() => dispatch(cartIncrement())}>Click</button>
      <CatalogueList posts={posts} />
    </div>
  );
};

export default CataloguePage;
