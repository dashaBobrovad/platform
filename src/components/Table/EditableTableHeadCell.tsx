import React, { useState } from "react";
import { IKey } from "../../types/IKey";

interface IEditableTableHeadCell {
  item: IKey;
  index: number;
  changeName: (index: number, name: string) => void;
}
export const EditableTableHeadCell = ({
  item,
  index,
  changeName,
}: IEditableTableHeadCell) => {

  return (
    <input
      value={item.name}
      onChange={(e) => changeName(index, e.target.value)}
      type="text"
      name={item.key}
    />
  );
};
