import React, { useEffect } from "react";

import s from "../../assets/scss/TableFooter.module.scss";
import { ITableRow } from "../../types/ITableRow";

interface ITableFooter {
  range: number[];
  setPage: (page: number) => void;
  page: number;
  slice: ITableRow[];
}

export const TableFooter = ({ range, setPage, page, slice }: ITableFooter) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div className={s.tableFooter}>
      {range.map((el: number, index: number) => (
        <button
          key={index}
          className={`${s.button} ${
            page === el ? s.activeButton : s.inactiveButton
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};
