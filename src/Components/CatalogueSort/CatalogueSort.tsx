import React from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  setMakerSearchInput,
  setMaxPriceFilter,
  setMinPriceFilter,
  toggleMakerShowMore,
} from "../../Redux/Reducers/catalogueSlice";
import CheckboxGroup, { CheckBoxI } from "../UI/CheckboxGroup/CheckboxGroup";
import SearchInput from "../UI/SearchInput/SearchInput";
import "./CatalogueSort.scss";
import { useSortCheckBoxes } from "../../Hooks/hooks";

type Props = {};

function CatalogueSort({}: Props) {
  const priceFilter = useAppSelector((state) => state.catalogue.priceFilter);
  const makerSortCheckBoxes = useAppSelector(
    (state) => state.catalogue.makerSortCheckBoxes
  );
  const isShowMore = useAppSelector((state) => state.catalogue.makerShowMore);

  const makerSearchInput = useAppSelector(
    (state) => state.catalogue.makerSearchInput
  );

  let sortedMakerSortCheckBoxes = useSortCheckBoxes(
    makerSortCheckBoxes,
    makerSearchInput,
    isShowMore
  );

  const dispatch = useAppDispatch();

  return (
    <div className="sort-section">
      <h2>ПОДБОР ПО ПАРАМЕТРАМ</h2>
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
        <CheckboxGroup checkBoxes={sortedMakerSortCheckBoxes} />
        <button
          onClick={() => dispatch(toggleMakerShowMore())}
          className="sort-section__maker-show-more"
        >
          {isShowMore ? (
            <>
              <span>Показать меньше</span>
              <img className="rotate180" src="./img/ui-triangle.svg" alt="" />
            </>
          ) : (
            <>
              <span>Показать все</span>
              <img src="./img/ui-triangle.svg" alt="" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default CatalogueSort;
