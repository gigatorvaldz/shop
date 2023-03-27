import React from "react";
import "./SearchInput.scss";

interface SearchInputPropsI {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ onChange }: SearchInputPropsI) {
  return (
    <div className="search-input-wrapper">
      <input
        onChange={onChange}
        className="search-input"
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
}

export default SearchInput;
