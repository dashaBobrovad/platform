import { ITableRow } from "./ITableRow";

export enum TableActionTypes{
  GET_DATA = 'GET_DATA'
}

export interface ITableState{
  data: ITableRow[];
}

interface IGetDataAction {
  type: TableActionTypes.GET_DATA;
  payload: ITableRow[];
}

export type TableAction = IGetDataAction; // action1 | action2
