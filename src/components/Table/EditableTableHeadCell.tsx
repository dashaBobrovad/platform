import React, { useState } from "react";
import { IKey } from "../../types/IKey";

interface IEditableTableHeadCell {
  item: IKey;
  index: number;
}
export const EditableTableHeadCell = ({
  item,
  index,
}: IEditableTableHeadCell) => {
  const [state, setState] = useState(item.name);

  return (
    <input
      value={state}
      onChange={({ target }) => setState(target.value)}
      type="text"
      name={item.key}
    />
  );
};
