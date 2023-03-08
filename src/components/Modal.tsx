import React, { useEffect } from "react";

import s from "../assets/scss/Modal.module.scss";
import { ITableRow } from "../types/ITableRow";

interface IModalProps {
  closeModal: () => void;
  item: ITableRow;
}
export const Modal = ({ closeModal, item }: IModalProps) => {
  return (
    <div className={s.modal}>
      <div className={s.modal__dialog}>
        <div className={s.modal__content}>
          <div className={s.modal__header}>
            <button
              type="button"
              className={s.modal__close}
              onClick={closeModal}
            >
              ×
            </button>
          </div>
          <div className={s.modal__body}>
            <ul>
              <li>id: {item.id}</li>
              <li>name: {item.name}</li>
              <li>model: {item.model}</li>
              <li>manufacturer: {item.manufacturer}</li>
              <li>passengers: {item.passengers}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
