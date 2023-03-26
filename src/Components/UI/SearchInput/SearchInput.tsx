import React from "react";
import "./SearchInput.scss"

interface SearchInputPropsI {}

function SearchInput({}: SearchInputPropsI) {
  return (
    <div className="search-input-wrapper">
      <input
        className="search-input"
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
}

export default SearchInput;
