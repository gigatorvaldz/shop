import React from "react";
import "./pageList.scss";
import classNames from "classnames";
import { useAppSelector } from "../../Redux/hooks";

import backI from "../../img/Back-pagination.svg";
import nextI from "../../img/Next-pagination.svg";

interface PageListPropsI {
  pageArray: Array<number>;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onPrevClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onNextClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function PageList({
  pageArray,
  onClick,
  onPrevClick,
  onNextClick,
}: PageListPropsI) {
  const currentPage = useAppSelector((state) => state.catalogue.currentPage);

  return (
    <div className="page-list">
      <button onClick={onPrevClick} className="page-list__back-arrow">
        <img src={backI} alt="back arrow" />
      </button>
      {pageArray.map((page) => (
        <button
          className={classNames(
            {
              "page-list__item-active": currentPage == page,
            },
            "page-list__item"
          )}
          key={page}
          onClick={onClick}
        >
          {page + 1}
        </button>
      ))}
      <button onClick={onNextClick} className="page-list__next-arrow">
        <img src={nextI} alt="next arrow" />
      </button>
    </div>
  );
}

export default PageList;
