import React from "react";
import { EditableTableHeadCell } from "../../components";
import { IKey } from "../../types/IKey";

interface ITableHead {
  columns: IKey[];
  isEdit: boolean;
  setKeys: React.Dispatch<React.SetStateAction<IKey[]>>;
}
export const TableHead = ({ columns, isEdit, setKeys }: ITableHead) => {

  const handleHide = (index: number, isHidden: boolean) => {
    setKeys((prev: IKey[]) =>
      prev.map((item: IKey) =>
        item.id === index ? { ...item, isHidden: isHidden } : { ...item }
      )
    );
  };

  const changeName = (index: number, name: string) => {
      const copyKeys = [...columns];
      copyKeys[index].name = name;
      setKeys(copyKeys);
  }

  return (
    <thead>
      <tr>
        {columns &&
          columns.map((item: IKey, index: number) => (
            <th key={item.key} className={item.isHidden ? "hide-column" : ""}>
              {isEdit ? (
                <EditableTableHeadCell item={item} index={index} changeName={changeName} />
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
