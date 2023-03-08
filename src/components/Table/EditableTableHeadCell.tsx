import React, { useState } from "react";

interface IEditableTableHeadCell {
  value: string;
  index: number;
}
export const EditableTableHeadCell = ({
  value,
  index,
}: IEditableTableHeadCell) => {
  const [state, setState] = useState(value);

  return (
    // <input
    //   value={value}
    //   onChange={({ target }) => changeValues(target.value, index)}
    //   type="text"
    //   name={value}
    // />
    <input
      value={state}
      onChange={({ target }) => setState(target.value)}
      type="text"
      name={value}
    />
  );
};
