import { ITableRow } from './../../types/ITableRow';
import { ITableState, TableActionTypes, TableAction } from '../../types/tableReducerTypes';

const initialState: ITableState = {
    data: [],
    columns: [],
};

const tableReducer = (state = initialState, action: TableAction): ITableState => {
    switch (action.type) {
        case TableActionTypes.GET_DATA:
            return {
                ...state,
                data: [...action.payload]
            };
        case TableActionTypes.GET_COLUMNS: 
        return{
            ...state,
            columns: [...action.payload]
        }
        default:
            return state;
    }
};

const getTableDataAction = (payload: ITableRow[]) => ({ type: TableActionTypes.GET_DATA, payload });
const getTableColumnsAction = (payload: string[]) => ({ type: TableActionTypes.GET_COLUMNS, payload });
export { getTableDataAction, getTableColumnsAction };
export default tableReducer;