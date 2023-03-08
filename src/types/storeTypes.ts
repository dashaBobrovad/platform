import { AnyAction, Store } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../data/store";

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
  dispatch: AppThunkDispatch;
};
