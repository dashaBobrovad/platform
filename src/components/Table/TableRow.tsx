import React, { useState } from "react";
import { ITableRow } from "../../types/ITableRow";
import { Modal } from "../../components";
import { IKey } from "../../types/IKey";

interface ITableRowProps {
  item: ITableRow;
  index: number;
  keys: IKey[];
}
export const TableRow = ({ item, index, keys }: ITableRowProps) => {
  const [isModal, setModal] = useState<boolean>(false);

  const openModal = (event: any) => {
    if (event.detail === 2) {
      setModal(true);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  const hideClassReturner = (index: number) => {
    return keys[index].isHidden ? "hide-column" : "";
  };

  return (
    <React.Fragment>
      {isModal && <Modal closeModal={closeModal} item={item} />}

      <tr>
        {Object.keys(item).map((key: string, index: number) => (
          <td onClick={openModal} className={hideClassReturner(index)}>
            {item[key as keyof ITableRow]}
          </td>
        ))}
      </tr>
    </React.Fragment>
  );
};
