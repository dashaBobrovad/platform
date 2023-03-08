import React from "react";
import { EditableTableHeadCell } from "../../components";
import { IKey } from "../../types/IKey";

interface ITableHead {
  columns: any;
  isEdit: boolean;
  setKeys: any;
}
export const TableHead = ({ columns, isEdit, setKeys }: ITableHead) => {
  const handleHide = (index: number, isHidden: boolean) => {
    setKeys((prev: any) =>
      prev.map((item: any) =>
        item.id === index ? { ...item, isHidden: isHidden } : { ...item }
      )
    );
  };
  return (
    <thead>
      <tr>
        {columns &&
          columns.map((item: IKey, index: number) => (
            <th key={item.key} className={item.isHidden ? "hide-column" : ""}>
              {isEdit ? (
                <EditableTableHeadCell item={item} index={index} />
              ) : (
                <span>{item.name}</span>
              )}
              {!item.isHidden ? (
                <button onClick={() => handleHide(index, true)}>hide</button>
              ) : (
                <button onClick={() => handleHide(index, false)}>show</button>
              )}
            </th>
          ))}
      </tr>
    </thead>
  );
};
