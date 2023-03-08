import React, { useState } from "react";
import { ITableRow } from "../../types/ITableRow";
import { Modal } from "../../components";
import { IKey } from "../../types/IKey";

interface ITableRowProps {
  item: ITableRow;
  index: number;
  keys: IKey[];
  // hiddenClassReturner: (
  //   item: ITableRow,
  //   value: string | number
  // ) => string | undefined;
}
export const TableRow = ({
  item,
  index,
  keys
}: // hiddenClassReturner,
ITableRowProps) => {
  const [isModal, setModal] = useState<boolean>(false);

  const openModal = (event: any) => {
    if (event.detail === 2) {
      setModal(true);
    }
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <React.Fragment>
      {isModal && <Modal closeModal={closeModal} item={item} />}

      <tr>
        {/* придумать красивую логику - отдельная ф-я или записывать в redax скрытую колонку + memo (лучше стейт, нам в редаксе это не надо)*/}
        <td onClick={openModal} className={keys[0].isHidden ? 'hide' : ''}>{item.id}</td>
        <td onClick={openModal} className={keys[1].isHidden ? 'hide' : ''}>{item.name}</td>
        <td onClick={openModal} className={keys[2].isHidden ? 'hide' : ''}>{item.model}</td>
        <td onClick={openModal} className={keys[3].isHidden ? 'hide' : ''}>{item.manufacturer}</td>
        <td onClick={openModal} className={keys[4].isHidden ? 'hide' : ''}>{item.passengers}</td>
      </tr>
    </React.Fragment>
  );
};
