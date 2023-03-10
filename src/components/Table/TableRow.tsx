import React, { useState, useEffect } from "react";
import { ITableRow } from "../../types/ITableRow";
import { Modal } from "../../components";
import { IColumn } from "../../types/IColumn";

interface ITableRowProps {
  item: ITableRow;
  properties: IColumn[];
}
export const TableRow = ({ item, properties }: ITableRowProps) => {
  const [isModal, setModal] = useState(false);
  const openModal = (event: React.MouseEvent) => {
    if (event.detail === 2) {
      setModal(true);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  const hideClassReturner = (index: number) => {
    return properties[index].isHidden ? "hide-column" : "";
  };



  return (
    <React.Fragment>
      {isModal && <Modal closeModal={closeModal} item={item} />}

      <tr>
        {Object.keys(item).map((key: string, index: number) => (
          <td key={key} onClick={openModal} className={hideClassReturner(index)} style={{ textAlign: properties[index].alignment as 'left' | 'right' }}>
            {item[key as keyof ITableRow]}
          </td>
        ))}
      </tr>
    </React.Fragment>
  );
};
