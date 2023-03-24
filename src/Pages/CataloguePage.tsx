import React from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { increment } from "../Redux/Reducers/catalogueSlice";

interface CataloguePageProps {}

const CataloguePage = (props: CataloguePageProps) => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.catalogue.value);

  return (
    <div>
      Catalogue Page
      {value}
      <button onClick={() => dispatch(increment())}>Inc</button>
    </div>
  );
};

export default CataloguePage;
