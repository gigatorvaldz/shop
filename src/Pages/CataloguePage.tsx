import React from "react";

import { useAppSelector, useAppDispatch } from "../Redux/hooks";
import { filterKeys, useAllSortPosts } from "../Hooks/hooks";

import "./SCSS/CataloguePage.scss";

import CatalogueList from "../Components/CatalogueList/CatalogueList";
import Select, { selectOptionType } from "../Components/UI/Select/Select";
import {
  setCurrentPage,
  setSelectedTags,
  setSortBy,
  toggleSortTags,
} from "../Redux/Reducers/catalogueSlice";
import CatalogueSort from "../Components/CatalogueSort/CatalogueSort";
import classNames from "classnames";
import PageList from "../Components/PageList/PageList";
import {
  slicePostPages,
  getPageArray,
  getPagesCount,
} from "../Utils/pageUtils";
import { Link } from "react-router-dom";
import BackButton from "../Components/UI/BackButton/BackButton";

interface CataloguePageProps {}

const CataloguePage = (props: CataloguePageProps) => {
  let posts = useAppSelector((state) => state.catalogue.posts);

  const dispatch = useAppDispatch();

  const selectedTags = useAppSelector((state) => state.catalogue.selectedTags);

  const sortedMakers = useAppSelector((state) => state.catalogue.sortedMakers);
  const currentSort = useAppSelector((state) => state.catalogue.sortBy);
  const priceFilter = useAppSelector((state) => state.catalogue.priceFilter);
  const sortTags = useAppSelector((state) => state.catalogue.sortTags);
  const currentPage = useAppSelector((state) => state.catalogue.currentPage);
  const sortedPosts = useAllSortPosts(
    posts,
    currentSort,
    priceFilter,
    sortedMakers,
    sortTags
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
    { name: "Цена (убывание)", value: "reversePrice" },
    { name: "Название (убывание)", value: "reverseName" },
  ];

  let slicedPages = slicePostPages(sortedPosts, 15);

  if (!slicedPages[currentPage]) dispatch(setCurrentPage(0));
  let currentPosts = slicedPages[currentPage];
  let onPageListClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setCurrentPage(Number(e.currentTarget.textContent) - 1));
  };

  let onPageListNextClick = () => {
    if (currentPage + 1 < slicedPages.length) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  let onPageListPrevClick = () => {
    if (currentPage > 0) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  return (
    <main className="catalogue container">
      <div className="catalogue__breadcrumbs desktop-only">
        <a href="">
          <span className="catalogue__breadcrumbs-main">Главная</span>
        </a>
        <a href="">
          <span className="catalogue__breadcrumbs-add">
            Косметика и гигиена
          </span>
        </a>
      </div>
      <div className="mobile-only">
        <BackButton />
      </div>
      <div className="catalogue__up-header">
        <h1>Косметика и гигиена</h1>
        <div className="catalogue__header-sort desktop-only">
          <span>Сортировка: </span>
          <Select onChange={selectChangeHandle} options={options} />
        </div>
      </div>
      <ul className="catalogue__lower-header desktop-only">
        <li
          className={classNames(
            {
              "catalogue__lower-header-item-active": selectedTags.body,
            },
            "catalogue__lower-header-item"
          )}
        >
          <button
            onClick={() => {
              dispatch(toggleSortTags("body"));
              dispatch(
                setSelectedTags({ ...selectedTags, body: !selectedTags.body })
              );
            }}
          >
            Уход за телом
          </button>
        </li>
        <li
          className={classNames(
            {
              "catalogue__lower-header-item-active": selectedTags.hands,
            },
            "catalogue__lower-header-item"
          )}
        >
          <button
            onClick={() => {
              dispatch(toggleSortTags("hands"));
              dispatch(
                setSelectedTags({ ...selectedTags, hands: !selectedTags.hands })
              );
            }}
          >
            Уход за руками
          </button>
        </li>
      </ul>
      <div className="catalogue__main-section">
        <CatalogueSort />
        <div className="catalogue__header-sort mobile-sort mobile-only">
          <span>Сортировка: </span>
          <Select onChange={selectChangeHandle} options={options} />
        </div>
        <div className="catalogue__posts">
          <CatalogueList posts={currentPosts} />
          <div className="catalogue__page-list">
            <PageList
              onClick={onPageListClick}
              onNextClick={onPageListNextClick}
              onPrevClick={onPageListPrevClick}
              pageArray={getPageArray(getPagesCount(sortedPosts.length, 15))}
            />
          </div>
        </div>
      </div>
      <div className="catalogue__create-button-wrapper">
        <Link to="post-create" className="catalogue__create-button">
          Создать Пост
        </Link>
      </div>
    </main>
  );
};

export default CataloguePage;
