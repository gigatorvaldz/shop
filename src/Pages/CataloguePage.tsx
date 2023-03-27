import React from "react";

import { useAppSelector, useAppDispatch } from "../Redux/hooks";
import { useSortPosts, filterKeys, useAllSortPosts } from "../Hooks/hooks";

import "./SCSS/CataloguePage.scss";

import CatalogueList from "../Components/CatalogueList/CatalogueList";
import Select, { selectOptionType } from "../Components/UI/Select/Select";
import { setSortBy } from "../Redux/Reducers/catalogueSlice";
import CatalogueSort from "../Components/CatalogueSort/CatalogueSort";

interface CataloguePageProps {}

const CataloguePage = (props: CataloguePageProps) => {
  const posts = useAppSelector((state) => state.catalogue.posts);
  const dispatch = useAppDispatch();

  const sortedMakers = useAppSelector((state) => state.catalogue.sortedMakers);
  const currentSort = useAppSelector((state) => state.catalogue.sortBy);
  const priceFilter = useAppSelector((state) => state.catalogue.priceFilter);
  const sortedPosts = useAllSortPosts(
    posts,
    currentSort,
    priceFilter,
    sortedMakers
  );

  let selectChangeHandle = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    let value = e.currentTarget.value;

    const isFilter = (filter: string): filter is filterKeys =>
      (filter as filterKeys) !== undefined;

    if (!isFilter(value)) {
      return;
    }
    dispatch(setSortBy(value));
  };

  const options: Array<selectOptionType> = [
    { name: "Название", value: "name" },
    { name: "Цена", value: "price" },
  ];

  return (
    <main className="catalogue container">
      <div className="catalogue__breadcrumbs">
        <a href="">
          <span className="catalogue__breadcrumbs-main">Главная</span>
        </a>
        <a href="">
          <span className="catalogue__breadcrumbs-add">
            Косметика и гигиена
          </span>
        </a>
      </div>
      <div className="catalogue__up-header">
        <h1>Косметика и гигиена</h1>
        <div className="catalogue__header-sort">
          <span>Сортировка: </span>
          <Select onChange={selectChangeHandle} options={options} />
        </div>
      </div>
      <ul className="catalogue__lower-header">
        <li className="catalogue__lower-header-item">Уход за телом</li>
        <li className="catalogue__lower-header-item">Уход за руками</li>
      </ul>
      <div className="catalogue__main-section">
        <CatalogueSort />
        <div className="catalogue__posts">
          <CatalogueList posts={sortedPosts} />
        </div>
      </div>
    </main>
  );
};

export default CataloguePage;
