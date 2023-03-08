import React, { useEffect, useState } from "react";
import { fetchTableData } from "../../data/asyncActions/data";
import usePagination from "../../data/hooks/usePagination";
import { useTypedDispatch } from "../../data/hooks/useTypedDispatch";
import { useTypedSelector } from "../../data/hooks/useTypedSelector";
import { ITableRow } from "../../types/ITableRow";
import { TableHead, TableFooter, TableRow } from "../../components";
import { IKey } from "../../types/IKey";

export const Table = () => {
  const tableData = useTypedSelector((state) => state.table.data);
  const dispatch = useTypedDispatch();

  const [keys, setKeys] = useState<IKey[]>([]);

  useEffect(() => {
    dispatch(fetchTableData());
  }, []);

  useEffect(() => {
    tableData.length > 0 &&
      setKeys(
        Object.keys(tableData[0]).map((key, index) => {
          return {
            id: index,
            key: key,
            name: key,
            isHidden: false,
          };
        })
      );
  }, [tableData]);

  const [page, setPage] = useState<number>(1);
  const { slice, range } = usePagination(tableData, page, 20);

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const changeColumnsName = () => {
    setIsEdit((prev) => !prev);
    console.log(keys);
    // if(!isEdit){
    //   // отправляем новую дату (как ее сюда получить ?)
    //   console.log('data')
    // }
    if (isEdit) {
      console.log("save");
    }
  };

  return (
    <React.Fragment>
      <button onClick={() => changeColumnsName()}>
        {isEdit ? "save" : "change columns name"}
      </button>

      <table>
        {keys.length > 0 && (
          <TableHead
            columns={keys}
            isEdit={isEdit}
            setKeys={setKeys}
          />
        )}

        <tbody>
          {(slice as ITableRow[]).map((item: ITableRow, index: number) => (
            <TableRow
              item={item}
              index={index}
              keys={keys}
              key={`${item.name}-${index}`}
            />
          ))}
        </tbody>
      </table>

      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </React.Fragment>
  );
};
