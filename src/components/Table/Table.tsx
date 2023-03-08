import React, { useCallback, useEffect, useState } from "react";
import { fetchTableData } from "../../data/asyncActions/data";
import useTable from "../../data/hooks/useTable";
import { useTypedDispatch } from "../../data/hooks/useTypedDispatch";
import { useTypedSelector } from "../../data/hooks/useTypedSelector";
import { ITableRow } from "../../types/ITableRow";
import { TableHead, TableFooter, TableRow } from "../../components";

export const Table = () => {
  const tableData = useTypedSelector((state) => state.table.data);
  const tableKeys = useTypedSelector((state) => state.table.columns);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchTableData());
  }, []);

  const [hiddenColumn, setHiddenColumn] = useState<null | number>(null);

  const toggleColumn = (id: number) => {
    setHiddenColumn(id);
  };

  const hiddenClassReturner = useCallback(
    (item: ITableRow, value: string | number) => {
      if (hiddenColumn !== null) {
        // скрывать сразу несколько (создать отдельный список со скрытыми колонками и выводить класс в зависимости от этого )
        // сделать возможность показывать ячейку снова (для этого не до конца ее закрывать)
        if (
          (item as { [k in string]: any })[tableKeys[hiddenColumn]] === value
        ) {
          return "hide";
        }
      }
    },
    [hiddenColumn, tableKeys]
  );

  const [page, setPage] = useState<number>(1);
  const { slice, range } = useTable(tableData, page, 4);

  const [isEdit, setIsEdit] = useState<boolean>(false);
  
  const changeColumnsName = () => {
    setIsEdit(prev => !prev);

    if(!isEdit){
      // отправляем новую дату (как ее сюда получить ?)
      console.log('data')
    }
  };

  return (
    <React.Fragment>
      <button onClick={() => changeColumnsName()}>
        {isEdit ? "save" : "change columns name"}
      </button>
      <table>
        <TableHead
          columns={tableKeys}
          hiddenColumn={hiddenColumn}
          toggleColumn={toggleColumn}
          isEdit={isEdit}
        />
        <tbody>
          {(slice as ITableRow[]).map((item: ITableRow, index: number) => (
            <TableRow
              item={item}
              index={index}
              hiddenClassReturner={hiddenClassReturner}
              key={`${item.name}-${index}`}
            />
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </React.Fragment>
  );
};
