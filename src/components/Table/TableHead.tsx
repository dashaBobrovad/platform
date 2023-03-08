import React from 'react';

interface ITableHead {
    columns: string[],
    hiddenColumn: number | null,
    toggleColumn: (id: number) => void
}
export const TableHead = ({ columns, hiddenColumn,toggleColumn }: ITableHead) => {
    return (
        <thead>
        <tr>
          {/* <input name="column" type="checkbox" value="1" onClick={() => toggleColumn()} checked /> */}
          {columns &&
            columns.map((item: string, index: number) => (
              // эдитабл и неэдитабл, по клику переключаем; вводим значение - его перезаписываем редакс (сделать экшн для change, сохраняем - значение поменялось )
              <td key={item} className={hiddenColumn === index ? "hide" : ""}>
                {item}
                <button onClick={() => toggleColumn(index)}>hide</button>
              </td>
            ))}
        </tr>
      </thead>
    )
  }
  