import React from 'react';
import { EditableTableHeadCell } from '../../components';
import { IColumn } from '../../types/IColumn';

interface ITableHead {
  columns: IColumn[];
  isEdit: boolean;
  setColumns: React.Dispatch<React.SetStateAction<IColumn[]>>;
}
export const TableHead = ({ columns, isEdit, setColumns }: ITableHead) => {
  const handleHide = (index: number) => {
    console.log();
    setColumns((prev: IColumn[]) =>
      prev.map((item: IColumn) =>
        item.id === index ? { ...item, isHidden: !item.isHidden } : { ...item }
      )
    );
  };

  const changeName = (index: number, dataField: string) => {
    setColumns((prev: IColumn[]) =>
      prev.map((item: IColumn) =>
        item.id === index ? { ...item, dataField } : { ...item }
      )
    );
  };

  return (
    <thead>
      <tr>
        {columns.map((item: IColumn, index: number) => (
          <th key={item.dataField} className={item.isHidden ? 'hide-column' : ''}>
            {isEdit ? (
              <EditableTableHeadCell
                item={item}
                index={index}
                changeName={changeName}
              />
            ) : (
              <span>{item.dataField}</span>
            )}
            <br /><button onClick={() => handleHide(index)}>{item.isHidden ? "show" : "hide"}</button>
            <br /><span className='column-caption'>{item.caption}</span>
            
          </th>
        ))}
      </tr>
    </thead>
  );
};
