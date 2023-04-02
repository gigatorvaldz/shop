import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  toggleSortedMakers,
  setMakerSearchInput,
  setMaxPriceFilter,
  setMinPriceFilter,
  toggleCheckedMaker,
  toggleMakerShowMore,
  setSelectedTags,
  toggleSortTags,
  updateMakerSortCheckBoxes,
  updatePriceFilter,
} from "../../Redux/Reducers/catalogueSlice";
import CheckboxGroup from "../UI/CheckboxGroup/CheckboxGroup";
import SearchInput from "../UI/SearchInput/SearchInput";
import "./CatalogueSort.scss";
import { useSliceCheckBoxes, useSortCheckBoxes } from "../../Hooks/hooks";
import classNames from "classnames";

import moreArrow from "../../img/back-arrow.svg";
import uiTriangle from "../../img/ui-triangle.svg";

type Props = {};

function CatalogueSort({}: Props) {
  const priceFilter = useAppSelector((state) => state.catalogue.priceFilter);
  const makerSortCheckBoxes = useAppSelector(
    (state) => state.catalogue.makerSortCheckBoxes
  );
  const isShowMore = useAppSelector((state) => state.catalogue.makerShowMore);
  const selectedTags = useAppSelector((state) => state.catalogue.selectedTags);

  const makerSearchInput = useAppSelector(
    (state) => state.catalogue.makerSearchInput
  );
  let sortedMakerSortCheckBoxes = useSortCheckBoxes(
    makerSortCheckBoxes,
    makerSearchInput
  );

  let sortedMakerSortCheckBoxesShowed = useSliceCheckBoxes(
    sortedMakerSortCheckBoxes,
    isShowMore,
    4
  );

  const [isShowMoreParams, setIsShowMoreParams] = useState(false);

  const dispatch = useAppDispatch();

  const makerCheckBoxChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(toggleCheckedMaker(e.currentTarget.id));
    dispatch(toggleSortedMakers(e.currentTarget.id));
  };

  useEffect(() => {
    dispatch(updateMakerSortCheckBoxes());
    dispatch(updatePriceFilter());
  }, []);

  return (
    <div className="sort-section">
      <div className="sort-section__params">
        <h2>ПОДБОР ПО ПАРАМЕТРАМ</h2>
        <div
          onClick={() => setIsShowMoreParams(!isShowMoreParams)}
          className="mobile-only more-params-btn"
        >
          <div
            className={classNames(
              {
                "more-params-btn__img-wrapper-active": isShowMoreParams,
              },
              "more-params-btn__img-wrapper"
            )}
          >
            <img src={moreArrow} alt="arrow icon" />
          </div>
        </div>
      </div>
      <div className={classNames({
        "visually-hidden": isShowMoreParams
      })}>
        <p className="sort-section__price-title">
          Цена <span>₸</span>
        </p>
        <div className="sort-section__price-sort">
          <div className="sort-section__price-sort-input-wrapper">
            <label htmlFor="price-sort-input-start" className="visually-hidden">
              Price input
            </label>
            <input
              type="number"
              name="price-sort-input-start"
              id="price-sort-input-start"
              className="sort-section__price-sort-input"
              placeholder="0"
              value={priceFilter.min}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setMinPriceFilter(Number(e.currentTarget.value)))
              }
            />
          </div>
          -
          <div className="sort-section__price-sort-input-wrapper">
            <label htmlFor="price-sort-input-end" className="visually-hidden">
              Price input
            </label>
            <input
              type="number"
              name="price-sort-input-end"
              id="price-sort-input-end"
              className="sort-section__price-sort-input"
              placeholder="1000"
              value={priceFilter.max}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setMaxPriceFilter(Number(e.currentTarget.value)))
              }
            />
          </div>
        </div>
        <div className="sort-section__maker">
          <h2>Производитель</h2>
          <div className="sort-section__maker-search">
            <SearchInput
              onChange={(e) =>
                dispatch(setMakerSearchInput(e.currentTarget.value))
              }
            />
          </div>
          <CheckboxGroup
            onChange={makerCheckBoxChangeHandler}
            checkBoxes={sortedMakerSortCheckBoxesShowed}
          />
          <button
            onClick={() => dispatch(toggleMakerShowMore())}
            className="sort-section__maker-show-more"
          >
            {isShowMore ? (
              <>
                <span>Показать меньше</span>
                <img className="rotate180" src={uiTriangle} alt="" />
              </>
            ) : (
              <>
                <span>Показать все</span>
                <img src={uiTriangle} alt="" />
              </>
            )}
          </button>
        </div>
      </div>
      <h3
        onClick={() => {
          dispatch(toggleSortTags("body"));
          dispatch(
            setSelectedTags({ ...selectedTags, body: !selectedTags.body })
          );
        }}
        className={classNames(
          {
            "sort-section__tag-active": selectedTags.body,
          },
          "sort-section__tag"
        )}
      >
        Уход за телом
      </h3>
      <h3
        onClick={() => {
          dispatch(toggleSortTags("hands"));
          dispatch(
            setSelectedTags({ ...selectedTags, hands: !selectedTags.hands })
          );
        }}
        className={classNames(
          {
            "sort-section__tag-active": selectedTags.hands,
          },
          "sort-section__tag"
        )}
      >
        Уход за руками
      </h3>
    </div>
  );
}

export default CatalogueSort;
