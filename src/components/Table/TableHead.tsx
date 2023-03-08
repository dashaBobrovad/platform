import React from "react";
import { EditableTableHeadCell } from "../../components";

interface ITableHead {
  columns: string[];
  hiddenColumn: number | null;
  toggleColumn: (id: number) => void;
  isEdit: boolean;
}
export const TableHead = ({
  columns,
  hiddenColumn,
  toggleColumn,
  isEdit,
}: ITableHead) => {

  return (
    <thead>
      <tr>
        {/* <input name="column" type="checkbox" value="1" onClick={() => toggleColumn()} checked /> */}
        {columns &&
          columns.map((item: string, index: number) => (
            <th key={item} className={hiddenColumn === index ? "hide" : ""}>
              {isEdit ? (
                <EditableTableHeadCell
                  value={columns[index]}
                  index={index}
                />
              ) : (
                <span>{item}</span>
              )}
              <button onClick={() => toggleColumn(index)}>hide</button>
            </th>
          ))}
      </tr>
    </thead>
  );
};
