import React from "react";
import CatalogueList from "../Components/CatalogueList/CatalogueList";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";

interface CataloguePageProps {}

const CataloguePage = (props: CataloguePageProps) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.catalogue.posts)

  return (
    <div>
      Catalogue Page
      <CatalogueList posts={posts}/>
    </div>
  );
};

export default CataloguePage;
