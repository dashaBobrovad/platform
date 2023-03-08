import axios, { AxiosError } from "axios";
import {
  getTableDataAction,
} from "../reducers/tableReducer";
import { Dispatch } from "redux";
import { TableAction } from "../../types/tableReducerTypes";

export const fetchTableData = () => {
  return async (dispatch: Dispatch<TableAction>) => {
    axios
      .get("http://localhost:3000/db/data.json")
      .then((response) => {
        dispatch(getTableDataAction(response.data));
      })
      .catch((e: unknown) => {
        const error = e as AxiosError;
        console.log(error);
      });
  };
};
