import { ITableRow } from "../../types/ITableRow";

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
  return (
    <tr>
      {/* придумать красивую логику - отдельная ф-я или записывать в redax скрытую колонку + memo (лучше стейт, нам в редаксе это не надо)*/}
      <td className={hiddenClassReturner(item, item.id)}>{item.id}</td>
      <td className={hiddenClassReturner(item, item.name)}>{item.name}</td>
      <td className={hiddenClassReturner(item, item.model)}>{item.model}</td>
      <td className={hiddenClassReturner(item, item.manufacturer)}>
        {item.manufacturer}
      </td>
      <td className={hiddenClassReturner(item, item.passengers)}>{}</td>
    </tr>
  );
};
