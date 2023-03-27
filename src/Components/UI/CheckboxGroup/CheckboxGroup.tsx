import classNames from "classnames";
import React from "react";
import "./CheckBoxGroup.scss";

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

function CheckboxGroup({ checkBoxes, onChange}: CheckboxGroupPropsI) {
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
          {cb.label && <span className="CheckBox-Label">{cb.label}</span>}
        </span>
      ))}
    </div>
  );
}

export default CheckboxGroup;
