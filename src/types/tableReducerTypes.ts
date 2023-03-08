import { ITableRow } from "./ITableRow";

export enum TableActionTypes{
  GET_DATA = 'GET_DATA',
  GET_COLUMNS = 'GET_COLUMNS'
}

export interface ITableState{
  data: ITableRow[];
  columns: string[];
}

interface IGetDataAction {
  type: TableActionTypes.GET_DATA;
  payload: ITableRow[];
}

interface IGetColumnsAction {
  type: TableActionTypes.GET_COLUMNS;
  payload: string[];
}


export type TableAction = IGetDataAction | IGetColumnsAction | any; // action1 | action2
