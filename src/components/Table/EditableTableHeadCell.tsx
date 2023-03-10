import React from "react";
import { IColumn } from "../../types/IColumn";

interface IEditableTableHeadCell {
  item: IColumn;
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
      value={item.dataField}
      onChange={(e) => changeName(index, e.target.value)}
      type="text"
      name={item.dataField}
    />
  );
};
