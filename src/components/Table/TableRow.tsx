import React, { useState } from "react";
import { ITableRow } from "../../types/ITableRow";
import { Modal } from "../../components";

interface ITableRowProps {
  item: ITableRow;
  index: number;
  hiddenClassReturner: (
    item: ITableRow,
    value: string | number
  ) => string | undefined;
}
export const TableRow = ({
  item,
  index,
  hiddenClassReturner,
}: ITableRowProps) => {
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
      {
        isModal && <Modal closeModal={closeModal} item={item}/>
      }

      <tr>
        {/* придумать красивую логику - отдельная ф-я или записывать в redax скрытую колонку + memo (лучше стейт, нам в редаксе это не надо)*/}
        <td className={hiddenClassReturner(item, item.id)} onClick={openModal}>
          {item.id}
        </td>
        <td
          className={hiddenClassReturner(item, item.name)}
          onClick={openModal}
        >
          {item.name}
        </td>
        <td
          className={hiddenClassReturner(item, item.model)}
          onClick={openModal}
        >
          {item.model}
        </td>
        <td
          className={hiddenClassReturner(item, item.manufacturer)}
          onClick={openModal}
        >
          {item.manufacturer}
        </td>
        <td
          className={hiddenClassReturner(item, item.passengers)}
          onClick={openModal}
        >
          {item.passengers}
        </td>
      </tr>
    </React.Fragment>
  );
};
