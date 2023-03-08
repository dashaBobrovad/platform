import { ITableRow } from "./../../types/ITableRow";
import {
  ITableState,
  TableActionTypes,
  TableAction,
} from "../../types/tableReducerTypes";

const initialState: ITableState = {
  data: []
};

const tableReducer = (
  state = initialState,
  action: TableAction
): ITableState => {
  switch (action.type) {
    case TableActionTypes.GET_DATA:
      return {
        ...state,
        data: [...action.payload],
      };
    default:
      return state;
  }
};

const getTableDataAction = (payload: ITableRow[]) => ({
  type: TableActionTypes.GET_DATA,
  payload,
});

export { getTableDataAction };
export default tableReducer;
