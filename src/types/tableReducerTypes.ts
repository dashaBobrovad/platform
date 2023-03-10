import { IColumn } from './IColumn';
import { ITableRow } from "./ITableRow";

export enum TableActionTypes{
  GET_DATA = 'GET_DATA',
  GET_COLUMNS = "GET_COLUMNS",
}

export interface ITableState{
  data: ITableRow[];
  columns: IColumn[];
}

interface IGetDataAction {
  type: TableActionTypes.GET_DATA;
  payload: ITableRow[];
}

export type TableAction = IGetDataAction ; // action1 | action2
