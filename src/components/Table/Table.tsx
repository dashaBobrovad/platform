import React, {useEffect, useState} from 'react';
import {fetchTableData} from '../../data/asyncActions/data';
import usePagination from '../../data/hooks/usePagination';
import {useTypedDispatch} from '../../data/hooks/useTypedDispatch';
import {useTypedSelector} from '../../data/hooks/useTypedSelector';
import {ITableRow} from '../../types/ITableRow';
import {TableHead, TableFooter, TableRow} from '../../components';
import {IColumn} from '../../types/IColumn';
import {config} from '../../data/report-config';

export const Table = () => {
  const tableData = useTypedSelector(state => state.table.data);
  const dispatch = useTypedDispatch();

  const [columns, setColumns] = useState<IColumn[]>([]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchTableData());
    }, 2000);
  }, []);

  useEffect(() => {
    tableData.length > 0 &&
      // setColumns(
      //   Object.keys(tableData[0]).map((key, index) => ({
      //     id: index,
      //     key: key,
      //     name: key,
      //     isHidden: false,
      //   }))
      // );
      setColumns(
        config.colums.map((item, index) => ({
          ...item,
          id: index,
          isHidden: false,
        }))
      )

  }, [tableData]);

  const [page, setPage] = useState(1);
  const {slice, range} = usePagination(tableData, page, 20);

  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(prev => !prev);
  };

  return (
    <React.Fragment>
      {columns.length ? (
        <>
          <button onClick={() => handleEdit()}>
            {isEdit ? 'save' : 'change columns name'}
          </button>
          <table>
            <caption>{`${config?.name} #${config?.code}`}</caption>
            <TableHead columns={columns} isEdit={isEdit} setColumns={setColumns} />
            <tbody>
              {(slice as ITableRow[]).map((item: ITableRow, index: number) => (
                <TableRow
                  item={item}
                  properties={columns}
                  key={`${item.name}-${index}`}
                />
              ))}
            </tbody>
          </table>
          <TableFooter
            range={range}
            slice={slice}
            setPage={setPage}
            page={page}
          />
        </>
      ) : (
        <div>loading...</div>
      )}
    </React.Fragment>
  );
};
