import React from "react";
import { filterKeys } from "../../../Hooks/hooks";

export type selectOptionType = {
  name: string;
  value: filterKeys;
};

interface SelectPropsI {
  options: Array<selectOptionType>;
  defaultOptoin?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Select({
  options,
  defaultOptoin = "Выбор сортировки",
  onChange,
}: SelectPropsI) {
  return (
    <select defaultValue={defaultOptoin} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default Select;
