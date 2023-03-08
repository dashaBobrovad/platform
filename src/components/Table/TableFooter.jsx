import React, { useEffect } from "react";

import s from "../../assets/scss/TableFooter.module.scss";

export const TableFooter = ({ range, setPage, page, slice }) => {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
          setPage(page - 1);
        }
      }, [slice, page, setPage]);
      return (
        <div className={s.tableFooter}>
          {range.map((el, index) => (
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
