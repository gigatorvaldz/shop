import classNames from "classnames";
import React from "react";
import "./CheckBoxGroup.scss";
import { useAppSelector } from "../../../Redux/hooks";
import { readableKeysPostI } from "../../../Types/defaultTypes";

export interface CheckBoxI {
  className?: string;
  id: string;
  label?: string;
  isChecked?: boolean;
}

interface CheckboxGroupPropsI {
  checkBoxes: Array<CheckBoxI> | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckboxGroup({ checkBoxes, onChange }: CheckboxGroupPropsI) {
  const posts = useAppSelector((state) => state.catalogue.posts);

  let getPostCount = (key: readableKeysPostI, value: string) => {
    let result = posts.filter((post) => post[key] === value);
    return result.length;
  };

  if (!checkBoxes) {
    return <div>Нет подходящих результатов.</div>;
  }
  return (
    <div className="CheckBoxGroup">
      {checkBoxes.map((cb) => (
        <span className="CheckBox-Inner" key={cb.id}>
          <label
            className={classNames("CheckBox", cb.className, {
              CheckBox__active: cb.isChecked,
            })}
            htmlFor={cb.id}
          ></label>
          <input
            checked={cb.isChecked}
            id={cb.id}
            name={cb.label}
            type="checkbox"
            value={cb.label}
            onChange={onChange}
          />
          {cb.label && (
            <span className="CheckBox-Label">
              {cb.label} {`(${getPostCount("maker", cb.id)})`}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export default CheckboxGroup;
