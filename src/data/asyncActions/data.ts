import axios, { AxiosError } from "axios";
import {
  getTableDataAction,
  getTableColumnsAction,
} from "../reducers/tableReducer";
import { Dispatch } from "redux";
import { TableAction } from "../../types/tableReducerTypes";

export const fetchTableData = () => {
  return async (dispatch: Dispatch<TableAction>) => {
    axios
      .get("http://localhost:3000/db/data.json")
      .then((response) => {
        dispatch(getTableDataAction(response.data));
        // dispatch(getTableColumnsAction(Object.keys(response.data[0])));
      })
      .catch((e: unknown) => {
        const error = e as AxiosError;
        console.log(error);
      });
  };
};
