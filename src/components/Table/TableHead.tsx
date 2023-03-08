import React, { useState } from "react";
import { EditableTableHeadCell } from "../../components";
import { IKey } from "../../types/IKey";

interface ITableHead {
  columns: any;
  hiddenColumn: number | null;
  toggleColumn: (id: number) => void;
  isEdit: boolean;
  setKeys: any;
}
export const TableHead = ({
  columns,
  hiddenColumn,
  toggleColumn,
  isEdit,
  setKeys,
}: ITableHead) => {
  return (
    <thead>
      <tr>
        {/* <input name="column" type="checkbox" value="1" onClick={() => toggleColumn()} checked /> */}
        {columns &&
          columns.map((item: IKey, index: number) => (
            <th key={item.key} className={item.isHidden ? "hide" : ""}>
              {isEdit ? (
                <EditableTableHeadCell item={item} index={index} />
              ) : (
                <span>{item.name}</span>
              )}
              {!item.isHidden ? (
                <button
                  onClick={() =>
                    setKeys((prev: any) =>
                      prev.map((item: any) =>
                        item.id === index
                          ? { ...item, isHidden: true }
                          : { ...item }
                      )
                    )
                  }
                >
                  hide
                </button>
              ) : (
                <button
                  onClick={() =>
                    setKeys((prev: any) =>
                      prev.map((item: any) =>
                        item.id === index
                          ? { ...item, isHidden: false }
                          : { ...item }
                      )
                    )
                  }
                >
                  show
                </button>
              )}
            </th>
          ))}
      </tr>
    </thead>
    // <div>

    // </div>
  );
};
