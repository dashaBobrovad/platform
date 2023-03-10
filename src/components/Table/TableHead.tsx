import React from 'react';
import { EditableTableHeadCell } from '../../components';
import { IKey } from '../../types/IKey';

interface ITableHead {
  columns: IKey[];
  isEdit: boolean;
  setColumns: React.Dispatch<React.SetStateAction<IKey[]>>;
}
export const TableHead = ({ columns, isEdit, setColumns }: ITableHead) => {
  const handleHide = (index: number) => {
    console.log();
    setColumns((prev: IKey[]) =>
      prev.map((item: IKey) =>
        item.id === index ? { ...item, isHidden: !item.isHidden } : { ...item }
      )
    );
  };

  const changeName = (index: number, dataField: string) => {
    setColumns((prev: IKey[]) =>
      prev.map((item: IKey) =>
        item.id === index ? { ...item, dataField } : { ...item }
      )
    );
  };

  return (
    <thead>
      <tr>
        {columns.map((item: IKey, index: number) => (
          <th key={item.key} className={item.isHidden ? 'hide-column' : ''}>
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
